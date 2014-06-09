
class Display

  def initialize(domain, x_display)
    @domain = domain
    @x_display = x_display
  end

  def start
    start_virtviewer(@domain)
    # We wait for the display to be active to not lose actions
    # (e.g. key presses via sikuli) that come immediately after
    # starting (or restoring) a vm
    try_for(20, { :delay => 0.1, :msg => "virt-viewer failed to start"}) {
      active?
    }
  end

  def stop
    stop_virtviewer
  end

  def restart
    stop_virtviewer
    start_virtviewer(@domain)
  end

  def start_virtviewer(domain)
    # virt-viewer forks, so we cannot (easily) get the child pid
    # and use it in active? and stop_virtviewer below...
    IO.popen(["virt-viewer", "-d",
                             "-f",
                             "-r",
                             "-c", "qemu:///system",
                             ["--display=", @x_display].join(''),
                             domain,
                             "&"].join(' '))
  end

  def active?
    p = IO.popen("xprop -display #{@x_display} " +
                 "-name '#{@domain} (1) - Virt Viewer' 2>/dev/null")
    Process.wait(p.pid)
    p.close
    $? == 0
  end

  def stop_virtviewer
    system("killall virt-viewer")
  end
end
