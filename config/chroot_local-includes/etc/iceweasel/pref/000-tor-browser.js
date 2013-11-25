# Default Preferences
# Tor Browser Bundle
# Do not edit this file.

// Disable browser auto updaters and associated homepage notifications
pref("app.update.auto", false);
pref("app.update.enabled", false);
pref("browser.search.update", false);
pref("browser.rights.3.shown", true);
pref("browser.startup.homepage_override.mstone", "ignore");
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_override_url", "");

// Disk activity: Disable Browsing History Storage
pref("browser.privatebrowsing.autostart", true);
pref("browser.cache.disk.enable", false);
pref("browser.cache.offline.enable", false);
pref("dom.indexedDB.enabled", false);
pref("permissions.memory_only", true);
pref("network.cookie.lifetimePolicy", 2);
pref("browser.download.manager.retention", 1);

// Disk activity: TBB Directory Isolation
pref("browser.download.useDownloadDir", false);
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.download.manager.addToRecentDocs", false);

// Misc privacy: Disk
pref("signon.rememberSignons", false);
pref("browser.formfill.enable", false);
pref("signon.autofillForms", false);
pref("browser.sessionstore.privacy_level", 2);

// Misc privacy: Remote
pref("browser.send_pings", false);
pref("geo.enabled", false);
pref("geo.wifi.uri", "");
pref("browser.search.suggest.enabled", false);
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.download.manager.scanWhenDone", false); // prevents AV remote reporting of downloads
pref("extensions.ui.lastCategory", "addons://list/extension");

// Fingerprinting
pref("webgl.min_capability_mode", true);
pref("webgl.disable-extensions", true);
pref("dom.battery.enabled", false); // fingerprinting due to differing OS implementations
pref("dom.network.enabled",false); // fingerprinting due to differing OS implementations
pref("browser.display.max_font_attempts",10);
pref("browser.display.max_font_count",10);
pref("gfx.downloadable_fonts.fallback_delay", -1);
pref("general.appname.override", "Netscape");
pref("general.appversion.override", "5.0 (Windows)");
pref("general.oscpu.override", "Windows NT 6.1");
pref("general.platform.override", "Win32");
pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");
pref("general.productSub.override", "20100101");
pref("general.buildID.override", "20100101");
pref("browser.startup.homepage_override.buildID", "20100101");
pref("general.useragent.vendor", "");
pref("general.useragent.vendorSub", "");
pref("dom.enable_performance", false);
pref("plugin.expose_full_path", false);
pref("browser.zoom.siteSpecific", false);
// pref("intl.accept_languages", "en-us, en"); // Set by Torbutton
// pref("intl.accept_charsets", "iso-8859-1,*,utf-8"); // Set by Torbutton
// pref("intl.charsetmenu.browser.cache", "UTF-8"); // Set by Torbutton

// Third party stuff
pref("network.cookie.cookieBehavior", 1);
pref("security.enable_tls_session_tickets", false);
pref("network.http.spdy.enabled", false); // Stores state and may have keepalive issues (both fixable)
pref("network.http.spdy.enabled.v2", false); // Seems redundant, but just in case
pref("network.http.spdy.enabled.v3", false); // Seems redundant, but just in case

// Proxy and proxy security
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 9150);
pref("network.proxy.socks_remote_dns", true);
pref("network.proxy.type", 1);
pref("network.security.ports.banned", "9050,9051,9150,9151");
pref("network.dns.disablePrefetch", true);
pref("network.protocol-handler.external-default", false);
pref("network.protocol-handler.external.mailto", false);
pref("network.protocol-handler.external.news", false);
pref("network.protocol-handler.external.nntp", false);
pref("network.protocol-handler.external.snews", false);
pref("network.protocol-handler.warn-external.mailto", true);
pref("network.protocol-handler.warn-external.news", true);
pref("network.protocol-handler.warn-external.nntp", true);
pref("network.protocol-handler.warn-external.snews", true);
pref("plugins.click_to_play", true);
pref("plugin.state.flash", 1);
pref("plugins.hide_infobar_for_missing_plugin", true);

// Network and performance
pref("network.http.pipelining", true);
pref("network.http.pipelining.aggressive", true);
pref("network.http.pipelining.maxrequests", 12);
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.pipelining", true);
pref("security.ssl.enable_false_start", true);
pref("network.http.keep-alive.timeout", 20);
pref("network.http.connection-retry-timeout", 0);
pref("network.http.max-persistent-connections-per-proxy", 256);
pref("network.http.pipelining.reschedule-timeout", 15000);
pref("network.http.pipelining.read-timeout", 60000);
// Hacked pref: Now means "Attempt to pipeline at least this many requests together"
pref("network.http.pipelining.max-optimistic-requests", 3);

// Extension support
pref("extensions.autoDisableScopes", 0);
pref("extensions.bootstrappedAddons", "{}");
pref("extensions.checkCompatibility.4.*", false);
pref("extensions.databaseSchema", 3);
pref("extensions.enabledAddons", "https-everywhere%40eff.org:3.1.4,%7B73a6fe31-595d-460b-a920-fcc0f8843232%7D:2.6.6.1,torbutton%40torproject.org:1.5.2,ubufox%40ubuntu.com:2.6,tor-launcher%40torproject.org:0.1.1pre-alpha,%7B972ce4c6-7e08-4474-a285-3208198ce6fd%7D:17.0.5");
pref("extensions.enabledItems", "langpack-en-US@firefox.mozilla.org:,{73a6fe31-595d-460b-a920-fcc0f8843232}:1.9.9.57,{e0204bd5-9d31-402b-a99d-a6aa8ffebdca}:1.2.4,{972ce4c6-7e08-4474-a285-3208198ce6fd}:3.5.8");
pref("extensions.enabledScopes", 1);
pref("extensions.pendingOperations", false);
pref("xpinstall.whitelist.add", "");
pref("xpinstall.whitelist.add.36", "");

// Omnibox settings
pref("keyword.URL", "https://startpage.com/do/search?q=");

// Hacks/workarounds: Direct2D seems to crash w/ lots of video cards w/ MinGW?
pref("gfx.direct2d.disabled", true);

// Version placeholder
pref("torbrowser.version", "UNKNOWN");
