(this.checkout = this.checkout || {}),
  (this.checkout.js = (function (t) {
    "use strict";
    function n(t, n) {
      if (0 == t.length) return [];
      for (var e = [], o = 0; o < t.length; o++) {
        var a = t[o];
        n(a) && e.push(a);
      }
      return e;
    }
    function e(t, n) {
      if (0 == t.length) return !1;
      for (var e = 0; e < t.length; e++) {
        if (n(t[e])) return !0;
      }
      return !1;
    }
    function o(t, n, e, o) {
      void 0 === o && (o = !1);
      var a = "",
        i = o ? "; secure" : "";
      if (e) {
        var r = new Date();
        r.setTime(r.getTime() + 24 * e * 60 * 60 * 1e3),
          (a = "; expires=" + r.toUTCString());
      }
      document.cookie = t + "=" + n + a + "; path=/" + i;
    }
    function a(t) {
      for (
        var n = t + "=", e = document.cookie.split(";"), o = 0;
        o < e.length;
        o++
      ) {
        for (var a = e[o]; " " == a.charAt(0); ) a = a.substring(1, a.length);
        if (0 == a.indexOf(n)) return a.substring(n.length, a.length);
      }
      return null;
    }
    function i(t) {
      for (var n = t.split("."), e = window, o = 0, a = n; o < a.length; o++) {
        var i = a[o];
        e[i] || (e[i] = {}), (e = e[i]);
      }
      return e;
    }
    function r(t) {
      return null == t;
    }
    var u,
      c =
        ((u = r),
        function (t) {
          return !u(t);
        });
    function s(t) {
      return r(t) || "" === t;
    }
    function d(t) {
      return t + "-" + Date.now();
    }
    function l(t) {
      var n = ["originDomain", "returnDomain"];
      return Object.keys(t)
        .map(function (e) {
          if (r(t[e])) return null;
          return (
            e + "=" + (n.indexOf(e) > -1 ? t[e] : encodeURIComponent(t[e]))
          );
        })
        .filter(c)
        .join("&");
    }
    function m(t) {
      try {
        var n = document.createElement("a");
        n.href = t;
        var e = n.origin;
        return (
          e ||
            (n.protocol &&
              n.hostname &&
              -1 !=
                (e =
                  n.protocol +
                  "//" +
                  n.hostname +
                  (n.port ? ":" + n.port : "")).search(/:443/) &&
              (e = e.replace(":443", ""))),
          !e || ("null" != e && "file://" != e) ? e : null
        );
      } catch (t) {
        return null;
      }
    }
    function f() {
      return (
        void 0 !== performance &&
        void 0 !== performance.getEntries &&
        void 0 !== performance.getEntriesByName
      );
    }
    function h(t, n) {
      return (
        String.prototype.startsWith ||
          Object.defineProperty(String.prototype, "startsWith", {
            value: function (t, n) {
              var e = n > 0 ? 0 | n : 0;
              return this.substring(e, e + t.length) === t;
            },
          }),
        t.startsWith(n)
      );
    }
    function y(t) {
      return (
        null == t ||
        ("object" == typeof t && 0 === Object.keys(t).length) ||
        ("string" == typeof t && 0 === t.trim().length)
      );
    }
    var b = function () {
      return (b =
        Object.assign ||
        function (t) {
          for (var n, e = 1, o = arguments.length; e < o; e++)
            for (var a in (n = arguments[e]))
              Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          return t;
        }).apply(this, arguments);
    };
    function p(t, n, e, o) {
      return new (e || (e = Promise))(function (a, i) {
        function r(t) {
          try {
            c(o.next(t));
          } catch (t) {
            i(t);
          }
        }
        function u(t) {
          try {
            c(o.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function c(t) {
          t.done
            ? a(t.value)
            : new e(function (n) {
                n(t.value);
              }).then(r, u);
        }
        c((o = o.apply(t, n || [])).next());
      });
    }
    function _(t, n) {
      var e,
        o,
        a,
        i,
        r = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (e) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((e = 1),
                  o &&
                    (a =
                      2 & i[0]
                        ? o.return
                        : i[0]
                        ? o.throw || ((a = o.return) && a.call(o), 0)
                        : o.next) &&
                    !(a = a.call(o, i[1])).done)
                )
                  return a;
                switch (((o = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                  case 0:
                  case 1:
                    a = i;
                    break;
                  case 4:
                    return r.label++, { value: i[1], done: !1 };
                  case 5:
                    r.label++, (o = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !(a = (a = r.trys).length > 0 && a[a.length - 1]) &&
                      (6 === i[0] || 2 === i[0])
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                      r.label = i[1];
                      break;
                    }
                    if (6 === i[0] && r.label < a[1]) {
                      (r.label = a[1]), (a = i);
                      break;
                    }
                    if (a && r.label < a[2]) {
                      (r.label = a[2]), r.ops.push(i);
                      break;
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                i = n.call(t, r);
              } catch (t) {
                (i = [6, t]), (o = 0);
              } finally {
                e = a = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, u]);
        };
      }
    }
    var g = "AmazonPay:";
    function v(t) {
      throw g + "\n" + t;
    }
    var E,
      A,
      L,
      S = "tiab1y2",
      T = "ACTIVE",
      C = "language",
      P = "ledgerCurrency",
      I = "checkout.js",
      w = "maxo-button-render-start",
      x = "maxo-web-components-render-finish",
      O = "maxo-iframe-button-render-finish",
      G = "maxo-redirect-start",
      k = "maxo-redirect-finish",
      D = "maxo-button-render-measure",
      z = "apay-button-redirect-time",
      N = "maxo-button",
      M = "amazonpay-button-parent-container-checkout",
      B = ["merchantId", "ledgerCurrency", "placement"],
      R = "/checkout/initiate",
      U = "/checkout/initiate_auth",
      H = "/checkout/lwaPreAuthError",
      j = "D0000",
      J = "C0001",
      Y = "default",
      F = "affirm-button",
      K = "GIFT_CARD_CERTIFICATE",
      X = "non-affirm-button",
      W = "custom",
      q = "Gold",
      V = [q, "LightGray", "DarkGray"],
      Z = "SignIn",
      Q = "signin",
      $ = "signInConfig",
      tt = "createCheckoutSessionConfig",
      nt = "div[data-amazonpay-merchant-id]",
      et = "amazonpay-checkoutbutton-container-",
      ot = "MAXO_MODALVIEW",
      at = "CV2_DISABLED_TOOLTIP",
      it = "redirectView",
      rt = "modalView",
      ut = "apay-session-set",
      ct = "SANDBOX-",
      st = "LIVE-",
      dt = "animate-chevron",
      lt = "amazonpay-button-disabled",
      mt = "changeAction",
      ft = "amazonCheckoutSessionId",
      ht = "options",
      yt = "options.amazonPayOptions";
    !(function (t) {
      (t.CHANGE_PAYMENT = "changePayment"),
        (t.CHANGE_ADDRESS = "changeAddress");
    })(E || (E = {})),
      (function (t) {
        (t.INIT_CHECKOUT = "amazon.Pay.initCheckout"),
          (t.RENDER_BUTTON = "amazon.Pay.renderButton"),
          (t.BIND_UPGRADE_ACTION = "amazon.Pay.bindUpgradeAction"),
          (t.BIND_CHANGE_ACTION = "amazon.Pay.bindChangeAction"),
          (t.SWITCH_ACCOUNT = "amazon.Pay.switchAccount"),
          (t.CHANGE_PAYMENT_METHOD = "amazon.Pay.changePaymentMethod"),
          (t.CHANGE_SHIPPING_ADDRESS = "amazon.Pay.changeShippingAddress"),
          (t.CHANGE_ACCOUNT = "amazon.Pay.changeAccount");
      })(A || (A = {})),
      (function (t) {
        (t.INIT_CHECKOUT = "amazon.buywithprime.initCheckout"),
          (t.CHANGE_PAYMENT_METHOD = "amazon.buywithprime.changePaymentMethod"),
          (t.CHANGE_SHIPPING_ADDRESS =
            "amazon.buywithprime.changeShippingAddress"),
          (t.CHANGE_ACCOUNT = "amazon.buywithprime.changeAccount");
      })(L || (L = {}));
    var bt = "signature-button-session-config",
      pt = "signature-button-empty-object",
      _t = "signature-button-redirect",
      gt = "maxo-button-tooltip-parent-class",
      vt = "maxo-button-tooltip",
      Et = "maxo-button-tooltip-class",
      At = "T1",
      Lt = "T2",
      St = "Confirm",
      Tt = "PaymentMethodOnFile",
      Ct = {
        buttonColor: q,
        productType: "PayAndShip",
        sandbox: !1,
        publicKeyIdMismatch: !1,
        design: j,
        scopes: [],
        publicKeyId: "",
        estimatedOrderAmount: {},
        alwaysRedirect: !1,
      },
      Pt = {
        en: "en_US",
        fr: "fr_FR",
        it: "it_IT",
        es: "es_ES",
        de: "de_DE",
        ja: "ja_JP",
        "en-us": "en_US",
        "en-gb": "en_GB",
        "fr-fr": "fr_FR",
        "it-it": "it_IT",
        "es-es": "es_ES",
        "de-de": "de_DE",
        "ja-jp": "ja_JP",
      },
      It = "https://m.media-amazon.com/images/G/",
      wt = { NA: "01", EU: "02", FE: "09" },
      xt = {
        en_US: "NA",
        en_GB: "EU",
        de_DE: "EU",
        ja_JP: "FE",
        fr_FR: "EU",
        it_IT: "EU",
        es_ES: "EU",
      },
      Ot = {
        Home: "default_button",
        Product: "product_button",
        Cart: "default_button",
        Checkout: "default_button",
        Other: "default_button",
      },
      Gt = {
        Gold: "amazonpay-button-view1-gold",
        LightGray: "amazonpay-button-view1-gray",
        DarkGray: "amazonpay-button-view1-ink",
      },
      kt = "/AmazonPay/Maxo/logo._CB452516594_.svg",
      Dt = "/AmazonPay/Maxo/sandbox_icon._CB452516595_.svg",
      zt = "/AmazonPay/Maxo/AmazonPay_button_chevron._CB1558391205_.svg",
      Nt = "/AmazonPay/Maxo/Button-SignIn-ProductPage-en_US.svg",
      Mt = "/AmazonPay/Maxo/logo-amazonpay-gray_scalable._CB1582942856_.svg",
      Bt = "/AmazonPay/Maxo/logo-amazonpay-ink-scalable._CB1198675309_.svg",
      Rt = {
        en_US: "/AmazonPay/Maxo/logo._CB452516594_.svg",
        en_GB: "/AmazonPay/Maxo/logo._CB452516594_.svg",
        de_DE: "/AmazonPay/Maxo/logo._CB452516594_.svg",
        ja_JP: "/AmazonPay/Maxo/logo._CB452516594_.svg",
        fr_FR: "/AmazonPay/Maxo/logo._CB452516594_.svg",
        it_IT: "/AmazonPay/Maxo/logo._CB452516594_.svg",
        es_ES: "/AmazonPay/Maxo/logo._CB452516594_.svg",
      },
      Ut = {
        en_US: Mt,
        en_GB: Mt,
        de_DE: Mt,
        ja_JP: Mt,
        fr_FR: Mt,
        it_IT: Mt,
        es_ES: Mt,
      },
      Ht = {
        en_US: Bt,
        en_GB: Bt,
        de_DE: Bt,
        ja_JP: Bt,
        fr_FR: Bt,
        it_IT: Bt,
        es_ES: Bt,
      },
      jt = {
        Gold: {
          product_button: {
            C0001: {
              en_US:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-en_US._CB1575503625_.svg",
              en_GB:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-en_GB._CB446302581_.svg",
              de_DE:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-de_DE._CB1575508532_.svg",
              ja_JP:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-jp_JP._CB446302411_.svg",
              fr_FR:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-fr_FR._CB1198675309_.svg",
              it_IT:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-it_IT._CB446302291_.svg",
              es_ES:
                "/AmazonPay/Maxo/Button-Shopify-ProductPg-es_ES._CB1198675309_.svg",
            },
            D0000: Rt,
          },
          default_button: { C0001: Rt, D0000: Rt },
        },
        LightGray: {
          product_button: { D0000: Ut },
          default_button: { D0000: Ut },
        },
        DarkGray: {
          product_button: { D0000: Ht },
          default_button: { D0000: Ht },
        },
      },
      Jt = {
        Gold: {
          en_US: "/AmazonPay/Maxo/Button-SignIn-ProductPage-en_US.svg",
          en_GB: "/AmazonPay/Maxo/Button-SignIn-ProductPage-en_GB.svg",
          de_DE: "/AmazonPay/Maxo/Button-SignIn-ProductPage-de_DE.svg",
          ja_JP: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ja_JP.svg",
          fr_FR: "/AmazonPay/Maxo/Button-SignIn-ProductPage-fr_FR.svg",
          it_IT: "/AmazonPay/Maxo/Button-SignIn-ProductPage-it_IT.svg",
          es_ES: "/AmazonPay/Maxo/Button-SignIn-ProductPage-es_ES.svg",
        },
        LightGray: {
          en_US: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-en_US.svg",
          en_GB: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-en_GB.svg",
          de_DE: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-de_DE.svg",
          ja_JP: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-ja_JP.svg",
          fr_FR: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-fr_FR.svg",
          it_IT: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-it_IT.svg",
          es_ES: "/AmazonPay/Maxo/Button-SignIn-ProductPage-gray-es_ES.svg",
        },
        DarkGray: {
          en_US: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-en_US.svg",
          en_GB: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-en_GB.svg",
          de_DE: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-de_DE.svg",
          ja_JP: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-ja_JP.svg",
          fr_FR: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-fr_FR.svg",
          it_IT: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-it_IT.svg",
          es_ES: "/AmazonPay/Maxo/Button-SignIn-ProductPage-ink-es_ES.svg",
        },
      },
      Yt = {
        Gold: "/AmazonPay/Maxo/AmazonPay_button_chevron._CB1558391205_.svg",
        LightGray:
          "/AmazonPay/Maxo/AmazonPay_button_chevron._CB1558391205_.svg",
        DarkGray:
          "/AmazonPay/Maxo/button-v2-chevrons-white_scaled_1._CB1582929584_.svg",
      },
      Ft = {
        en_US: "/AmazonPay/Maxo/mt-en_us._CB1558571088_.svg",
        en_GB: "/AmazonPay/Maxo/mt-en_gb._CB1558571088_.svg",
        de_DE: "/AmazonPay/Maxo/mt-de_de._CB1558571088_.svg",
        ja_JP: "/AmazonPay/Maxo/mt-ja_jp._CB1568869902_.svg",
        fr_FR: "/AmazonPay/Maxo/mt-fr_fr._CB1558571088_.svg",
        it_IT: "/AmazonPay/Maxo/mt-it_it._CB1558571088_.svg",
        es_ES: "/AmazonPay/Maxo/mt-es_es._CB1558571088_.svg",
      };
    function Kt(t, n) {
      return "" + It + wt[xt[n]] + t;
    }
    var Xt = {
        en_US: "Amazon Pay - Use your Amazon Pay Sandbox test account",
        en_GB: "Amazon Pay - Use your Amazon Pay Sandbox test account",
        de_DE: "Amazon Pay - Verwenden Sie Ihr Amazon Pay-Sandbox-Testkonto",
        ja_JP:
          "Amazon Pay - Amazon Payãƒ†ã‚¹ãƒˆã‚¢ã‚«ã‚¦ãƒ³ãƒˆã‚’ãŠä½¿ã„ãã ã•ã„",
        fr_FR: "Amazon Pay - Utilisez votre compte test Amazon Pay",
        it_IT: "Amazon Pay - Usa il tuo account di prova Sandbox Amazon Pay",
        es_ES: "Amazon Pay - Usa tu cuenta de prueba de Sandbox de Amazon Pay",
      },
      Wt = {
        en_US: "Amazon Pay - Use your Amazon account",
        en_GB: "Amazon Pay - Use your Amazon account",
        de_DE: "Amazon Pay - Verwenden Sie Ihr Amazon-Konto",
        ja_JP: "Amazon Pay - Amazonã‚¢ã‚«ã‚¦ãƒ³ãƒˆã‚’ãŠä½¿ã„ãã ã•ã„",
        fr_FR: "Amazon Pay - Utilisez votre compte Amazon",
        it_IT: "Amazon Pay - Usa il tuo account Amazon",
        es_ES: "Amazon Pay - Usa tu cuenta de Amazon",
      },
      qt = {
        en_US:
          "Amazon Pay is currently not available on this site. Try a different payment option.",
        en_GB:
          "Amazon Pay is currently not available on this site. Try a different payment option.",
        de_DE:
          "Amazon Pay ist auf dieser Website derzeit nicht verfÃ¼gbar. Versuchen Sie es mit einer anderen Zahlungsart.",
        ja_JP:
          "ç¾åœ¨ã€AmazonPayã¯ã“ã®ã‚µã‚¤ãƒˆã§ã¯ã”åˆ©ç”¨ã„ãŸã ã‘ã¾ã›ã‚“ã€‚åˆ¥ã®æ”¯æ‰•ã„æ–¹æ³•ã‚’ãŠè©¦ã—ãã ã•ã„ã€‚",
        fr_FR:
          "Amazon Pay 'est pas disponible actuellement sur ce site. Essayez une autre option de paiement",
        it_IT:
          "Amazon Pay non Ã¨ attualmente disponibile su questo sito. Prova un'altra opzione di pagamento.",
        es_ES:
          "Amazon Pay no estÃ¡ disponible actualmente en este sitio. Prueba con una opciÃ³n de pago diferente.",
      },
      Vt = {
        en_US:
          "Pay using the information already stored in your Amazon account",
        en_GB:
          "Pay using the information already stored in your Amazon account",
        de_DE:
          "Nutzen Sie zum Bezahlen die Angaben, die Sie bereits in Ihrem Amazon-Konto gespeichert haben",
        ja_JP:
          "Amazonã‚¢ã‚«ã‚¦ãƒ³ãƒˆã«ç™»éŒ²ã•ã‚Œã¦ã„ã‚‹æƒ…å ±ã‚’åˆ©ç”¨ã—ã¦ãŠæ”¯æ‰•ã„",
        fr_FR:
          "Payez en ligne grÃ¢ce aux informations dÃ©jÃ  enregistrÃ©es dans votre compte Amazon",
        it_IT: "Paga usando i dati giÃ  presenti nel tuo account Amazon",
        es_ES:
          "Paga usando la informaciÃ³n que ya tienes guardada en tu cuenta de Amazon",
      },
      Zt = {
        en_US: "Sign in to your Amazon account",
        en_GB: "Sign in to your Amazon account",
        de_DE: "Melden Sie sich in Ihrem Amazon-Konto an",
        ja_JP: "Amazon ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã§ãƒ­ã‚°ã‚¤ãƒ³",
        fr_FR: "Connectez-vous Ã  votre compte Amazon",
        it_IT: "Accedi al tuo account Amazon",
        es_ES: "Inicia sesiÃ³n en tu cuenta de Amazon",
      },
      Qt = {
        EUR: 2,
        GBP: 2,
        AUD: 2,
        DKK: 2,
        HKD: 2,
        JPY: 0,
        NZD: 2,
        NOK: 2,
        ZAR: 2,
        SEK: 2,
        CHF: 2,
        USD: 2,
      },
      $t = "en_GB",
      tn = "de_DE",
      nn = "uk",
      en = "eu",
      on = { uk: "GBP", eu: "EUR", us: "USD", jp: "JPY" },
      an = {
        apchsHost: "https://payments-eu.amazon.com",
        defaultAuthUIHost: "https://payments.amazon.de",
        authUIHostByLang: {
          en_US: "https://apay-us.amazon.com",
          en_GB: "https://payments.amazon.co.uk",
          it_IT: "https://payments.amazon.it",
          de_DE: "https://payments.amazon.de",
          es_ES: "https://payments.amazon.es",
          fr_FR: "https://payments.amazon.fr",
          ja_JP: "https://payments.amazon.co.jp",
        },
        microTextVersion: {
          it_it: "_CB1558571088_",
          de_de: "_CB1558571088_",
          es_es: "_CB1558571088_",
          fr_fr: "_CB1558571088_",
          en_us: "_CB1558571088_",
          en_gb: "_CB440556592_",
          ja_jp: "_CB1568869902_",
        },
        coe: { USD: "US", EUR: "DE", GBP: "UK", JPY: "JP" },
        regionCode: "02",
        allowedLedgerCurrencies: "EUR,GBP",
        domainFallbackLanguage: "en_GB",
        allowedCheckoutLanguages: "en_GB,de_DE,fr_FR,it_IT,es_ES",
        supportedBrowserLanguages: "de,fr,it,es,en-gb,fr-fr,it-it,es-es,de-de",
        boltDomain: "https://connect.bolt.com",
        allowedCurrencyCodes: "EUR,GBP,AUD,DKK,HKD,JPY,NZD,NOK,ZAR,SEK,CHF,USD",
      },
      rn = false,
      un = {
        checkoutLanguage: an.allowedCheckoutLanguages.split(","),
        color: ["Gold"],
        ledgerCurrency: an.allowedLedgerCurrencies.split(","),
        productType: [
          "PayAndShip",
          "PayOnly",
          "SignIn",
          "Donation",
          "PayAndShipMultiAddress",
        ],
        placement: ["Home", "Product", "Cart", "Checkout", "Other"],
        sandbox: [!0, !1],
      },
      cn = an.allowedCurrencyCodes.split(",");
    var sn = 800,
      dn = 670;
    function ln(t, n) {
      void 0 === n && (n = "");
      var e = window.innerWidth / 2 - sn / 2 + window.screenLeft,
        o =
          window.innerHeight / 2 -
          dn / 2 +
          window.screenTop +
          (window.innerHeight - dn) / 2,
        a = t + new Date().getTime(),
        i =
          "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" +
          sn +
          ", height=" +
          dn +
          ",top=" +
          o +
          ",left=" +
          e,
        r = window.open(n, a, i);
      return window.focus && r && r.focus(), r;
    }
    function mn(t, n, e, o) {
      s(t[e]) &&
        v("Missing field " + e + " in the " + n + " object in " + o + " API.");
    }
    function fn(t, n) {
      return "GBP" === t
        ? an.authUIHostByLang.en_GB
        : n
        ? "en_GB" === n
          ? an.authUIHostByLang.de_DE
          : an.authUIHostByLang[n]
        : an.defaultAuthUIHost;
    }
    function hn(t) {
      var n = m(t);
      if (n && n.toLowerCase() === an.boltDomain.toLowerCase())
        try {
          var e = new URL(document.referrer).searchParams.get("referrer");
          return e || t;
        } catch (n) {
          return t;
        }
      return t;
    }
    function yn(t) {
      var n = (function () {
          var t = navigator.languages;
          if (
            (r(t) && !r(navigator.language) && (t = [navigator.language]),
            !r(t))
          )
            for (var n = 0; n < t.length; n++)
              if (
                an.supportedBrowserLanguages
                  .split(",")
                  .indexOf(t[n].toLowerCase()) > -1
              )
                return Pt[t[n].toLowerCase()];
          return null;
        })(),
        e = "" + an.domainFallbackLanguage;
      return t || n || e;
    }
    function bn(t) {
      return t === J;
    }
    function pn(t, n) {
      return t === Z || !r(n);
    }
    function _n(t, n) {
      return bn(n) ? q : t && V.indexOf(t) > -1 ? t : q;
    }
    function gn(t) {
      t.preventDefault(), t.stopPropagation();
    }
    function vn(t) {
      return t && "T1" == t[ot];
    }
    function En(t) {
      return t && "T1" == t[at];
    }
    function An(t) {
      return (
        !!(
          t &&
          t.shadowRoot &&
          t.shadowRoot.children &&
          t.shadowRoot.children[1]
        ) &&
        t &&
        t.shadowRoot &&
        t.shadowRoot.children &&
        t.shadowRoot.children[1].classList
      );
    }
    function Ln(t, n, e, o) {
      var a = An(n);
      t && t.MAXO_BUTTON_CONTENT_EXPERIMENT === Lt && a && !a.contains(lt)
        ? (a.add(Et),
          a.add(gt),
          o.appendChild(
            (function (t, n) {
              var e = document.createElement("span");
              (e.id = d(vt)),
                e.setAttribute("class", Et),
                e.setAttribute(
                  "style",
                  "position: absolute; \n    z-index: 999; \n    font-family: Arial, Helvetica, sans-serif; \n    width: calc(100% - 20px);\n    max-width: 150px;\n    min-height: 45px;\n    color: white; \n    border-radius: 6px; \n    padding: 10px; \n    border: 1px solid black;\n    background-color: rgb(47, 55, 61); \n    line-height: normal; \n    text-align: center; \n    font-size: 14px;\n    white-space: normal;\n    grid-row: 4/5;\n    top: .3em;"
                ),
                (e.textContent = Vt[t.checkoutLanguage]);
              var o =
                  '#BUTTON_ID .TOOLTIP_CLASS { display: none; } \n    #BUTTON_ID:hover .TOOLTIP_CLASS { \n        display: grid;  \n        transform: translate(-50%, 5%);\n        left: 50%;\n    } \n    #BUTTON_ID .TOOLTIP_CLASS:after { \n        content: " ";  \n        position: absolute; \n        bottom: 100%; \n        left: 50%; \n        margin-left: -10px; \n        border-width: 9px; \n        border-style: solid; \n        border-color: transparent transparent rgb(47, 55, 61) transparent \n    }'
                    .replace(/BUTTON_ID/g, n)
                    .replace(/TOOLTIP_CLASS/g, e.className),
                a = document.createElement("style");
              return (
                a.appendChild(document.createTextNode(o)), e.appendChild(a), e
              );
            })(e, o.id)
          ))
        : (n.title = pn(e.productType)
            ? Zt[e.checkoutLanguage]
            : Vt[e.checkoutLanguage]);
    }
    function Sn(t) {
      var n, e, o;
      if (t) {
        var a = void 0;
        try {
          a = JSON.parse(t);
        } catch (t) {
          return !1;
        }
        return (
          (null == a ? void 0 : a.chargePermissionType) === Tt &&
          (!0 ===
            (null ===
              (n = null == a ? void 0 : a.paymentMethodOnFileMetadata) ||
            void 0 === n
              ? void 0
              : n.setupOnly) ||
            "true" ===
              (null ===
                (e = null == a ? void 0 : a.paymentMethodOnFileMetadata) ||
              void 0 === e
                ? void 0
                : e.setupOnly)) &&
          (null === (o = null == a ? void 0 : a.paymentDetails) || void 0 === o
            ? void 0
            : o.paymentIntent) === St
        );
      }
      return !1;
    }
    function Tn(t, n) {
      t || v(n);
    }
    function Cn(t, n, e) {
      Tn(
        n,
        "Missing 'selector' parameter in amazon.Pay." +
          t +
          "(selector, options) API."
      ),
        Tn(
          e,
          "Missing 'options' parameter in amazon.Pay." +
            t +
            "(selector, options) API."
        );
      var o = document.querySelector(n);
      return (
        Tn(o, "Can not find element " + n + " for amazon.Pay." + t + "."),
        { ele: o, options: e }
      );
    }
    function Pn(t, n, e) {
      return r(t[n])
        ? e && "function" == typeof e
          ? e(n)
          : "Missing parameter '" + n + "' in the options object."
        : null;
    }
    function In(t, n) {
      void 0 === n && (n = !1);
      var e,
        o,
        a,
        i,
        r = !0;
      if ("string" == typeof t)
        try {
          t = JSON.parse(t);
        } catch (t) {
          console.error(
            "Estimated Order Amount in the payload is not in correct Json format."
          ),
            (r = !1);
        }
      try {
        return (
          n &&
            console.log(
              "Estimated order amount for sandbox is " + JSON.stringify(t)
            ),
          !!(
            r &&
            ((a = t.amount),
            (i = Number(a)),
            (!isNaN(Number(i)) && i > 0) ||
              (console.error(
                "Invalid value '" +
                  a +
                  "' for 'amount', please check again as only positive numbers are allowed."
              ),
              0)) &&
            ((e = t.currencyCode),
            (o = cn),
            o.includes(e) ||
              (console.error(
                "Invalid value '" +
                  e +
                  "' for 'currencyCode', please use from one of the available values: " +
                  o
              ),
              0)) &&
            (function (t, n) {
              var e = Qt[n],
                o = t.toString().split(".");
              return (
                e >= (o.length > 1 ? o[1].length : 0) ||
                (console.error(
                  "Invalid value '" +
                    t +
                    "' for 'amount', please pass valid fractional digits for " +
                    n
                ),
                !1)
              );
            })(t.amount, t.currencyCode)
          )
        );
      } catch (t) {
        return (
          console.error(
            "Something wrong while validating estimated order total"
          ),
          !1
        );
      }
    }
    function wn(t, n, e) {
      !(function (t, n) {
        var e = n
          .map(function (n) {
            return Pn(t, n);
          })
          .filter(c)
          .join("\n");
        "" !== e && v(e);
      })(t, n),
        (function (t, n) {
          var e = n
            .map(function (n) {
              var e = t[n],
                o = !(-1 === B.indexOf(n)),
                a = un[n] && un[n].indexOf(e) < 0,
                i = o && a,
                u = !r(e) && a;
              return i || u
                ? "Invalid value '" +
                    e +
                    "' for '" +
                    n +
                    "', please use one of the available values: " +
                    un[n].join(", ") +
                    "."
                : null;
            })
            .filter(c)
            .join("\n");
          "" !== e && v(e);
        })(t, e),
        (function (t) {
          null != t.publicKeyId &&
            "" == t.publicKeyId &&
            v("Invalid value '' for 'publicKeyId', please check again.");
        })(t),
        (function (t) {
          t.estimatedOrderAmount &&
            !y(t.estimatedOrderAmount) &&
            (In(t.estimatedOrderAmount, t.sandbox) ||
              delete t.estimatedOrderAmount);
        })(t);
    }
    function xn(t) {
      var n, e, o, a;
      null == t.sandbox
        ? ((t.publicKeyId && h(t.publicKeyId, ct)) ||
            ((null === (n = t.createCheckoutSessionConfig) || void 0 === n
              ? void 0
              : n.publicKeyId) &&
              h(
                null === (e = t.createCheckoutSessionConfig) || void 0 === e
                  ? void 0
                  : e.publicKeyId,
                ct
              )) ||
            ((null === (o = t.signInConfig) || void 0 === o
              ? void 0
              : o.publicKeyId) &&
              h(
                null === (a = t.signInConfig) || void 0 === a
                  ? void 0
                  : a.publicKeyId,
                ct
              ))) &&
          (t.sandbox = !0)
        : (function (t) {
            t.publicKeyId &&
              ((h(t.publicKeyId, ct) && !t.sandbox) ||
                (h(t.publicKeyId, st) && t.sandbox)) &&
              v(
                "PublicKeyId '" +
                  t.publicKeyId +
                  "' does not match 'sandbox: " +
                  t.sandbox +
                  "'. Please check again. "
              );
          })(t);
    }
    function On(t) {
      t.publicKeyId &&
        (t.createCheckoutSessionConfig &&
          (null == t.createCheckoutSessionConfig.publicKeyId
            ? (t.createCheckoutSessionConfig.publicKeyId = t.publicKeyId)
            : t.createCheckoutSessionConfig.publicKeyId != t.publicKeyId &&
              (t.publicKeyIdMismatch = !0)),
        t.signInConfig &&
          (null == t.signInConfig.publicKeyId
            ? (t.signInConfig.publicKeyId = t.publicKeyId)
            : t.signInConfig.publicKeyId != t.publicKeyId &&
              (t.publicKeyIdMismatch = !0)));
    }
    function Gn(t) {
      return b(b(b({}, Ct), t), { checkoutLanguage: yn(t.checkoutLanguage) });
    }
    var kn = {
      "live-custom-DarkGray-default_button-de_DE-tiab1y2.html": "31px3fO8ogL",
      "live-custom-DarkGray-default_button-en_GB-tiab1y2.html": "31D8kCnyX6L",
      "live-custom-DarkGray-default_button-en_US-tiab1y2.html": "31gBPBnhNwL",
      "live-custom-DarkGray-default_button-es_ES-tiab1y2.html": "31dge8knK1L",
      "live-custom-DarkGray-default_button-fr_FR-tiab1y2.html": "31zCZ6bRa7L",
      "live-custom-DarkGray-default_button-it_IT-tiab1y2.html": "31Z4OaJc9KL",
      "live-custom-DarkGray-default_button-ja_JP-tiab1y2.html": "31fEpPy74tL",
      "live-custom-DarkGray-product_button-de_DE-tiab1y2.html": "31HaMipfboL",
      "live-custom-DarkGray-product_button-en_GB-tiab1y2.html": "31uwv9Q8s+L",
      "live-custom-DarkGray-product_button-en_US-tiab1y2.html": "315eCuiL-8L",
      "live-custom-DarkGray-product_button-es_ES-tiab1y2.html": "31WSpwAhowL",
      "live-custom-DarkGray-product_button-fr_FR-tiab1y2.html": "31NgHewY0PL",
      "live-custom-DarkGray-product_button-it_IT-tiab1y2.html": "31ocKdB9N-L",
      "live-custom-DarkGray-product_button-ja_JP-tiab1y2.html": "31hWLveQkgL",
      "live-custom-Gold-default_button-de_DE-tiab1y2.html": "31uyID479LL",
      "live-custom-Gold-default_button-en_GB-tiab1y2.html": "315ylz8kLOL",
      "live-custom-Gold-default_button-en_US-tiab1y2.html": "31xDAWwHG8L",
      "live-custom-Gold-default_button-es_ES-tiab1y2.html": "31zfZByhONL",
      "live-custom-Gold-default_button-fr_FR-tiab1y2.html": "31iSD4jzHuL",
      "live-custom-Gold-default_button-it_IT-tiab1y2.html": "31iWjSGUFiL",
      "live-custom-Gold-default_button-ja_JP-tiab1y2.html": "31qjB259B7L",
      "live-custom-Gold-product_button-de_DE-tiab1y2.html": "31YaVLvjvVL",
      "live-custom-Gold-product_button-en_GB-tiab1y2.html": "31dcpSwcd5L",
      "live-custom-Gold-product_button-en_US-tiab1y2.html": "316mrhYCeEL",
      "live-custom-Gold-product_button-es_ES-tiab1y2.html": "31VDATDfaoL",
      "live-custom-Gold-product_button-fr_FR-tiab1y2.html": "31531-6ukyL",
      "live-custom-Gold-product_button-it_IT-tiab1y2.html": "319psHX53wL",
      "live-custom-Gold-product_button-ja_JP-tiab1y2.html": "31YEe65AtTL",
      "live-custom-LightGray-default_button-de_DE-tiab1y2.html": "31boC3Oh28L",
      "live-custom-LightGray-default_button-en_GB-tiab1y2.html": "31BwVcmexuL",
      "live-custom-LightGray-default_button-en_US-tiab1y2.html": "31OfduY70cL",
      "live-custom-LightGray-default_button-es_ES-tiab1y2.html": "310PZwB5khL",
      "live-custom-LightGray-default_button-fr_FR-tiab1y2.html": "31QIV9VBBWL",
      "live-custom-LightGray-default_button-it_IT-tiab1y2.html": "31sAvBMqW8L",
      "live-custom-LightGray-default_button-ja_JP-tiab1y2.html": "319t4Qch7ZL",
      "live-custom-LightGray-product_button-de_DE-tiab1y2.html": "31EppYNMfRL",
      "live-custom-LightGray-product_button-en_GB-tiab1y2.html": "31McLSCKLZL",
      "live-custom-LightGray-product_button-en_US-tiab1y2.html": "31gN32iacZL",
      "live-custom-LightGray-product_button-es_ES-tiab1y2.html": "31rRKMOHtpL",
      "live-custom-LightGray-product_button-fr_FR-tiab1y2.html": "31Y-YstkswL",
      "live-custom-LightGray-product_button-it_IT-tiab1y2.html": "31d5rIA2dFL",
      "live-custom-LightGray-product_button-ja_JP-tiab1y2.html": "316NTA+3aqL",
      "live-default-DarkGray-default_button-de_DE-tiab1y2.html": "31n8g8yrYSL",
      "live-default-DarkGray-default_button-en_GB-tiab1y2.html": "31YQJZ6smeL",
      "live-default-DarkGray-default_button-en_US-tiab1y2.html": "313QCaws9sL",
      "live-default-DarkGray-default_button-es_ES-tiab1y2.html": "31tDUTrBm4L",
      "live-default-DarkGray-default_button-fr_FR-tiab1y2.html": "31qFafoMJVL",
      "live-default-DarkGray-default_button-it_IT-tiab1y2.html": "319O-rMYnwL",
      "live-default-DarkGray-default_button-ja_JP-tiab1y2.html": "31pw8nUB92L",
      "live-default-DarkGray-product_button-de_DE-tiab1y2.html": "31n8g8yrYSL",
      "live-default-DarkGray-product_button-en_GB-tiab1y2.html": "31YQJZ6smeL",
      "live-default-DarkGray-product_button-en_US-tiab1y2.html": "313QCaws9sL",
      "live-default-DarkGray-product_button-es_ES-tiab1y2.html": "31tDUTrBm4L",
      "live-default-DarkGray-product_button-fr_FR-tiab1y2.html": "31qFafoMJVL",
      "live-default-DarkGray-product_button-it_IT-tiab1y2.html": "319O-rMYnwL",
      "live-default-DarkGray-product_button-ja_JP-tiab1y2.html": "31pw8nUB92L",
      "live-default-Gold-default_button-de_DE-tiab1y2.html": "31m-HXqzBTL",
      "live-default-Gold-default_button-en_GB-tiab1y2.html": "31aCmqqIEdL",
      "live-default-Gold-default_button-en_US-tiab1y2.html": "31oYBTS68iL",
      "live-default-Gold-default_button-es_ES-tiab1y2.html": "31vaOb+RHQL",
      "live-default-Gold-default_button-fr_FR-tiab1y2.html": "31VN-IWMtrL",
      "live-default-Gold-default_button-it_IT-tiab1y2.html": "316n37knHEL",
      "live-default-Gold-default_button-ja_JP-tiab1y2.html": "31AZIMVjUwL",
      "live-default-Gold-product_button-de_DE-tiab1y2.html": "31m-HXqzBTL",
      "live-default-Gold-product_button-en_GB-tiab1y2.html": "31aCmqqIEdL",
      "live-default-Gold-product_button-en_US-tiab1y2.html": "31oYBTS68iL",
      "live-default-Gold-product_button-es_ES-tiab1y2.html": "31vaOb+RHQL",
      "live-default-Gold-product_button-fr_FR-tiab1y2.html": "31VN-IWMtrL",
      "live-default-Gold-product_button-it_IT-tiab1y2.html": "316n37knHEL",
      "live-default-Gold-product_button-ja_JP-tiab1y2.html": "31AZIMVjUwL",
      "live-default-LightGray-default_button-de_DE-tiab1y2.html": "31kUBuB1dhL",
      "live-default-LightGray-default_button-en_GB-tiab1y2.html": "31+GKLY9m-L",
      "live-default-LightGray-default_button-en_US-tiab1y2.html": "31IXJ5BgvIL",
      "live-default-LightGray-default_button-es_ES-tiab1y2.html": "31ket5ZXbtL",
      "live-default-LightGray-default_button-fr_FR-tiab1y2.html": "31uALmhd6qL",
      "live-default-LightGray-default_button-it_IT-tiab1y2.html": "31-AleiLTQL",
      "live-default-LightGray-default_button-ja_JP-tiab1y2.html": "31mn4XdS3AL",
      "live-default-LightGray-product_button-de_DE-tiab1y2.html": "31kUBuB1dhL",
      "live-default-LightGray-product_button-en_GB-tiab1y2.html": "31+GKLY9m-L",
      "live-default-LightGray-product_button-en_US-tiab1y2.html": "31IXJ5BgvIL",
      "live-default-LightGray-product_button-es_ES-tiab1y2.html": "31ket5ZXbtL",
      "live-default-LightGray-product_button-fr_FR-tiab1y2.html": "31uALmhd6qL",
      "live-default-LightGray-product_button-it_IT-tiab1y2.html": "31-AleiLTQL",
      "live-default-LightGray-product_button-ja_JP-tiab1y2.html": "31mn4XdS3AL",
      "live-signin-DarkGray-de_DE-tiab1y2.html": "31z+cpq3DGL",
      "live-signin-DarkGray-en_GB-tiab1y2.html": "31q-oztLUCL",
      "live-signin-DarkGray-en_US-tiab1y2.html": "31-GcxYb-0L",
      "live-signin-DarkGray-es_ES-tiab1y2.html": "313YvGe7tzL",
      "live-signin-DarkGray-fr_FR-tiab1y2.html": "318zCxZ9CZL",
      "live-signin-DarkGray-it_IT-tiab1y2.html": "31w9t5MpomL",
      "live-signin-DarkGray-ja_JP-tiab1y2.html": "31ihnvfHEGL",
      "live-signin-Gold-de_DE-tiab1y2.html": "315e13n5SbL",
      "live-signin-Gold-en_GB-tiab1y2.html": "31d0485ktGL",
      "live-signin-Gold-en_US-tiab1y2.html": "31uEHQPxmKL",
      "live-signin-Gold-es_ES-tiab1y2.html": "31AF0PIfq+L",
      "live-signin-Gold-fr_FR-tiab1y2.html": "31t9Qmr76OL",
      "live-signin-Gold-it_IT-tiab1y2.html": "31QwCu1cU0L",
      "live-signin-Gold-ja_JP-tiab1y2.html": "31mwiGgAM0L",
      "live-signin-LightGray-de_DE-tiab1y2.html": "310ZHavetYL",
      "live-signin-LightGray-en_GB-tiab1y2.html": "31boKs2cA8L",
      "live-signin-LightGray-en_US-tiab1y2.html": "31RVULR+yiL",
      "live-signin-LightGray-es_ES-tiab1y2.html": "31Ak7zHtIOL",
      "live-signin-LightGray-fr_FR-tiab1y2.html": "31zmvQcO84L",
      "live-signin-LightGray-it_IT-tiab1y2.html": "31mAZ9mYCTL",
      "live-signin-LightGray-ja_JP-tiab1y2.html": "31mI+HgzKWL",
      "sandbox-custom-DarkGray-default_button-de_DE-tiab1y2.html":
        "31TPdt09xHL",
      "sandbox-custom-DarkGray-default_button-en_GB-tiab1y2.html":
        "31kYXg6nYcL",
      "sandbox-custom-DarkGray-default_button-en_US-tiab1y2.html":
        "31yUukBgKjL",
      "sandbox-custom-DarkGray-default_button-es_ES-tiab1y2.html":
        "31Hkgb9N7xL",
      "sandbox-custom-DarkGray-default_button-fr_FR-tiab1y2.html":
        "31-EakjBuYL",
      "sandbox-custom-DarkGray-default_button-it_IT-tiab1y2.html":
        "31it8OoCyIL",
      "sandbox-custom-DarkGray-default_button-ja_JP-tiab1y2.html":
        "31geE63lYOL",
      "sandbox-custom-DarkGray-product_button-de_DE-tiab1y2.html":
        "31zxzO4A9FL",
      "sandbox-custom-DarkGray-product_button-en_GB-tiab1y2.html":
        "31rIhGeB6OL",
      "sandbox-custom-DarkGray-product_button-en_US-tiab1y2.html":
        "31zB-FtLRsL",
      "sandbox-custom-DarkGray-product_button-es_ES-tiab1y2.html":
        "31Q8rlrh+nL",
      "sandbox-custom-DarkGray-product_button-fr_FR-tiab1y2.html":
        "313SZZt3qGL",
      "sandbox-custom-DarkGray-product_button-it_IT-tiab1y2.html":
        "31RolT6lhsL",
      "sandbox-custom-DarkGray-product_button-ja_JP-tiab1y2.html":
        "31mSAymSoML",
      "sandbox-custom-Gold-default_button-de_DE-tiab1y2.html": "31qfLXiFseL",
      "sandbox-custom-Gold-default_button-en_GB-tiab1y2.html": "31K8Kq9tGAL",
      "sandbox-custom-Gold-default_button-en_US-tiab1y2.html": "31CV1wVl2DL",
      "sandbox-custom-Gold-default_button-es_ES-tiab1y2.html": "31tHtLChinL",
      "sandbox-custom-Gold-default_button-fr_FR-tiab1y2.html": "31Yg210gUAL",
      "sandbox-custom-Gold-default_button-it_IT-tiab1y2.html": "310KfyUZW-L",
      "sandbox-custom-Gold-default_button-ja_JP-tiab1y2.html": "31GZbljVktL",
      "sandbox-custom-Gold-product_button-de_DE-tiab1y2.html": "31prK11SKZL",
      "sandbox-custom-Gold-product_button-en_GB-tiab1y2.html": "31QToAgVs9L",
      "sandbox-custom-Gold-product_button-en_US-tiab1y2.html": "319oBvpsQlL",
      "sandbox-custom-Gold-product_button-es_ES-tiab1y2.html": "31oE3e99anL",
      "sandbox-custom-Gold-product_button-fr_FR-tiab1y2.html": "31Ahk5i1KNL",
      "sandbox-custom-Gold-product_button-it_IT-tiab1y2.html": "31V7T8qcfqL",
      "sandbox-custom-Gold-product_button-ja_JP-tiab1y2.html": "31TwULWKB2L",
      "sandbox-custom-LightGray-default_button-de_DE-tiab1y2.html":
        "31DlYrS-VBL",
      "sandbox-custom-LightGray-default_button-en_GB-tiab1y2.html":
        "31OwQwe943L",
      "sandbox-custom-LightGray-default_button-en_US-tiab1y2.html":
        "31CugaR7SfL",
      "sandbox-custom-LightGray-default_button-es_ES-tiab1y2.html":
        "31yJL6s1JmL",
      "sandbox-custom-LightGray-default_button-fr_FR-tiab1y2.html":
        "31JxkJG4n+L",
      "sandbox-custom-LightGray-default_button-it_IT-tiab1y2.html":
        "31O5oiRiMfL",
      "sandbox-custom-LightGray-default_button-ja_JP-tiab1y2.html":
        "31kWd6d3zUL",
      "sandbox-custom-LightGray-product_button-de_DE-tiab1y2.html":
        "31cY1DzM1oL",
      "sandbox-custom-LightGray-product_button-en_GB-tiab1y2.html":
        "31zh-SZ-zfL",
      "sandbox-custom-LightGray-product_button-en_US-tiab1y2.html":
        "31bKnwm8QnL",
      "sandbox-custom-LightGray-product_button-es_ES-tiab1y2.html":
        "31XXOTRuNTL",
      "sandbox-custom-LightGray-product_button-fr_FR-tiab1y2.html":
        "31pnMvSIneL",
      "sandbox-custom-LightGray-product_button-it_IT-tiab1y2.html":
        "31lM79UBpsL",
      "sandbox-custom-LightGray-product_button-ja_JP-tiab1y2.html":
        "31NQgF8ExDL",
      "sandbox-default-DarkGray-default_button-de_DE-tiab1y2.html":
        "31ndz3eA5iL",
      "sandbox-default-DarkGray-default_button-en_GB-tiab1y2.html":
        "31iWWGasetL",
      "sandbox-default-DarkGray-default_button-en_US-tiab1y2.html":
        "31ElGyYbrqL",
      "sandbox-default-DarkGray-default_button-es_ES-tiab1y2.html":
        "310qKHO+c-L",
      "sandbox-default-DarkGray-default_button-fr_FR-tiab1y2.html":
        "31M62xoS3SL",
      "sandbox-default-DarkGray-default_button-it_IT-tiab1y2.html":
        "31VH6HY1bWL",
      "sandbox-default-DarkGray-default_button-ja_JP-tiab1y2.html":
        "31sGskR0AIL",
      "sandbox-default-DarkGray-product_button-de_DE-tiab1y2.html":
        "31ndz3eA5iL",
      "sandbox-default-DarkGray-product_button-en_GB-tiab1y2.html":
        "31iWWGasetL",
      "sandbox-default-DarkGray-product_button-en_US-tiab1y2.html":
        "31ElGyYbrqL",
      "sandbox-default-DarkGray-product_button-es_ES-tiab1y2.html":
        "310qKHO+c-L",
      "sandbox-default-DarkGray-product_button-fr_FR-tiab1y2.html":
        "31M62xoS3SL",
      "sandbox-default-DarkGray-product_button-it_IT-tiab1y2.html":
        "31VH6HY1bWL",
      "sandbox-default-DarkGray-product_button-ja_JP-tiab1y2.html":
        "31sGskR0AIL",
      "sandbox-default-Gold-default_button-de_DE-tiab1y2.html": "31aus3MNDeL",
      "sandbox-default-Gold-default_button-en_GB-tiab1y2.html": "31OIUlB47pL",
      "sandbox-default-Gold-default_button-en_US-tiab1y2.html": "31BjH+eTNKL",
      "sandbox-default-Gold-default_button-es_ES-tiab1y2.html": "312wpthNkdL",
      "sandbox-default-Gold-default_button-fr_FR-tiab1y2.html": "31RhGhaUGAL",
      "sandbox-default-Gold-default_button-it_IT-tiab1y2.html": "31wkcThO3sL",
      "sandbox-default-Gold-default_button-ja_JP-tiab1y2.html": "3150dOzH1JL",
      "sandbox-default-Gold-product_button-de_DE-tiab1y2.html": "31aus3MNDeL",
      "sandbox-default-Gold-product_button-en_GB-tiab1y2.html": "31OIUlB47pL",
      "sandbox-default-Gold-product_button-en_US-tiab1y2.html": "31BjH+eTNKL",
      "sandbox-default-Gold-product_button-es_ES-tiab1y2.html": "312wpthNkdL",
      "sandbox-default-Gold-product_button-fr_FR-tiab1y2.html": "31RhGhaUGAL",
      "sandbox-default-Gold-product_button-it_IT-tiab1y2.html": "31wkcThO3sL",
      "sandbox-default-Gold-product_button-ja_JP-tiab1y2.html": "3150dOzH1JL",
      "sandbox-default-LightGray-default_button-de_DE-tiab1y2.html":
        "31KESRYRhYL",
      "sandbox-default-LightGray-default_button-en_GB-tiab1y2.html":
        "31ttiYGtMnL",
      "sandbox-default-LightGray-default_button-en_US-tiab1y2.html":
        "31zw+i8HJLL",
      "sandbox-default-LightGray-default_button-es_ES-tiab1y2.html":
        "31H0fHVQfML",
      "sandbox-default-LightGray-default_button-fr_FR-tiab1y2.html":
        "31MBbrC5jdL",
      "sandbox-default-LightGray-default_button-it_IT-tiab1y2.html":
        "313KKJsYpqL",
      "sandbox-default-LightGray-default_button-ja_JP-tiab1y2.html":
        "31-cniEKATL",
      "sandbox-default-LightGray-product_button-de_DE-tiab1y2.html":
        "31KESRYRhYL",
      "sandbox-default-LightGray-product_button-en_GB-tiab1y2.html":
        "31ttiYGtMnL",
      "sandbox-default-LightGray-product_button-en_US-tiab1y2.html":
        "31zw+i8HJLL",
      "sandbox-default-LightGray-product_button-es_ES-tiab1y2.html":
        "31H0fHVQfML",
      "sandbox-default-LightGray-product_button-fr_FR-tiab1y2.html":
        "31MBbrC5jdL",
      "sandbox-default-LightGray-product_button-it_IT-tiab1y2.html":
        "313KKJsYpqL",
      "sandbox-default-LightGray-product_button-ja_JP-tiab1y2.html":
        "31-cniEKATL",
      "sandbox-signin-DarkGray-de_DE-tiab1y2.html": "31Zy3g5nU5L",
      "sandbox-signin-DarkGray-en_GB-tiab1y2.html": "31qo+aUYusL",
      "sandbox-signin-DarkGray-en_US-tiab1y2.html": "31Mj4NRDWIL",
      "sandbox-signin-DarkGray-es_ES-tiab1y2.html": "317sM3ifszL",
      "sandbox-signin-DarkGray-fr_FR-tiab1y2.html": "310T0pDkSqL",
      "sandbox-signin-DarkGray-it_IT-tiab1y2.html": "31rxWvDyTkL",
      "sandbox-signin-DarkGray-ja_JP-tiab1y2.html": "31tNbGpz30L",
      "sandbox-signin-Gold-de_DE-tiab1y2.html": "31oc0a9VqjL",
      "sandbox-signin-Gold-en_GB-tiab1y2.html": "318UB9gVxdL",
      "sandbox-signin-Gold-en_US-tiab1y2.html": "31xbo7e1tmL",
      "sandbox-signin-Gold-es_ES-tiab1y2.html": "319SE3wNkcL",
      "sandbox-signin-Gold-fr_FR-tiab1y2.html": "313cRZFVaEL",
      "sandbox-signin-Gold-it_IT-tiab1y2.html": "316a-DY2rwL",
      "sandbox-signin-Gold-ja_JP-tiab1y2.html": "31McsMUufwL",
      "sandbox-signin-LightGray-de_DE-tiab1y2.html": "311MZ9ZzlAL",
      "sandbox-signin-LightGray-en_GB-tiab1y2.html": "31NngLBHAML",
      "sandbox-signin-LightGray-en_US-tiab1y2.html": "31RCOSt2xgL",
      "sandbox-signin-LightGray-es_ES-tiab1y2.html": "319xLg7opIL",
      "sandbox-signin-LightGray-fr_FR-tiab1y2.html": "31k3VAd7Z3L",
      "sandbox-signin-LightGray-it_IT-tiab1y2.html": "31MmrSn0HLL",
      "sandbox-signin-LightGray-ja_JP-tiab1y2.html": "31O6Jx68EQL",
    };
    function Dn(t) {
      window.performance &&
        "function" == typeof window.performance.mark &&
        window.performance.mark(t);
    }
    function zn(t, n, e) {
      window.performance &&
        "function" == typeof window.performance.measure &&
        window.performance.measure(t, n, e);
    }
    function Nn(t) {
      window.performance &&
        "function" == typeof window.performance.clearMeasures &&
        window.performance.clearMeasures(t);
    }
    function Mn(t) {
      window.performance &&
        "function" == typeof window.performance.clearMarks &&
        window.performance.clearMarks(t);
    }
    function Bn(t) {
      var n = (function (t, n) {
        return window.performance &&
          "function" == typeof window.performance.getEntriesByName
          ? window.performance.getEntriesByName(t, n)
          : [];
      })(t, "measure");
      return n && n.length > 0 ? n[0].duration : 0;
    }
    function Rn(t, n, e, o) {
      void 0 === e && (e = !0), void 0 === o && (o = !0);
      var a = new XMLHttpRequest();
      if ("withCredentials" in a) a.open(t, n, o), (a.withCredentials = e);
      else {
        if ("undefined" == typeof XDomainRequest) return null;
        (a = new XDomainRequest()).open(t, n);
      }
      return a;
    }
    function Un() {
      var t = navigator.userAgent.toLowerCase();
      return !e(
        [
          "tablet",
          "mobile",
          "android",
          "webos",
          "ipad",
          "iemobile",
          "iphone",
          "ipod",
          "series60",
          "symbian",
          "opera mini",
          "windows ce",
          "blackberry",
          "palm",
        ],
        function (n) {
          return t.indexOf(n) > -1;
        }
      );
    }
    function Hn() {
      return (
        navigator.userAgent.toLowerCase().indexOf("msie") > -1 ||
        (!!window.MSInputMethodContext && !!document.documentMode)
      );
    }
    var jn = {},
      Jn = !1,
      Yn = !1,
      Fn = [];
    function Kn(t) {
      for (; Fn.length > 0; ) {
        var n = Fn.pop();
        "function" == typeof n && n(jn);
      }
    }
    function Xn(t, n) {
      if (!Jn)
        if (t.ledgerCurrency) {
          var e = t.sandbox || !1,
            o = t.merchantId || null,
            a = Rn(
              "GET",
              (function (t, n, e, o) {
                return [
                  an.apchsHost,
                  "/abTestV2",
                  "?",
                  l({
                    countryOfEstablishment: t,
                    ledgerCurrency: n,
                    isSandbox: e,
                    merchantId: o,
                  }),
                ].join("");
              })(an.coe[t.ledgerCurrency], t.ledgerCurrency, e, o),
              !0
            );
          !(function (t, n, e) {
            t && ((t.onload = n), (t.onerror = e), t.send());
          })(
            a,
            function () {
              try {
                var t = JSON.parse(
                  (null == a ? void 0 : a.responseText) || "{}"
                );
                jn = t.abTestResults;
              } catch (t) {
                jn = {};
              }
              Kn(), (Yn = !1);
            },
            function () {
              (jn = {}), Kn(), (Yn = !1);
            }
          ),
            (Jn = !0),
            (Yn = !0),
            n && Fn.push(n);
        } else n && n(jn);
    }
    function Wn(t, n, e) {
      if (!e && (Hn() || !Un())) return t({});
      Yn ? Fn.push(t) : !Jn && n && t ? Xn(n, t) : t(jn);
    }
    var qn = "register-amazonpay-button-click",
      Vn = "amazonpay-button-clicked",
      Zn = "amazonpay-button-click-disabled",
      Qn = "amazonpay-button-disabled-click-event";
    function $n(t, n, e, o) {
      t.style.position = "relative";
      var a,
        i = document.createElement("iframe"),
        r = e.sandbox ? "sandbox" : "live",
        u = Ot[e.placement];
      a = bn(e.design) ? W : Y;
      var c,
        s = _n(e.buttonColor, e.design);
      (c = pn(e.productType)
        ? kn[
            r + "-" + Q + "-" + s + "-" + e.checkoutLanguage + "-" + S + ".html"
          ]
        : kn[
            r +
              "-" +
              a +
              "-" +
              s +
              "-" +
              u +
              "-" +
              e.checkoutLanguage +
              "-" +
              S +
              ".html"
          ]),
        (i.src = "https://m.media-amazon.com/images/I/" + c + ".html"),
        i.setAttribute("frameborder", "0"),
        i.setAttribute("scrolling", "no"),
        i.setAttribute(
          "style",
          "width: 100%; height: 100%; background-color: transparent; position: absolute; left: 0; right: 0; top: 0; bottom: 0;"
        ),
        (i.onload = function () {
          i.contentWindow && i.contentWindow.postMessage(qn + "=" + n, "*");
        }),
        t.appendChild(i),
        (function (t, n, e) {
          window.addEventListener("message", function (t) {
            0 === t.data.indexOf(Vn) && t.data === Vn + "=" + n && e();
          });
        })(0, n, o),
        Dn(O);
    }
    function te(t, n, e) {
      var o = qt[e.checkoutLanguage],
        a = t.querySelector("iframe");
      a &&
        a.contentWindow &&
        ((a.tabIndex = -1),
        a.addEventListener("click", gn, !0),
        a.addEventListener("keyup", gn, !0),
        a.contentWindow.postMessage(Zn + "=" + o, "*"),
        Wn(
          function (t) {
            a &&
              a.contentWindow &&
              En(t) &&
              a.contentWindow.postMessage(Qn + "=" + o, "*");
          },
          e,
          !0
        ));
    }
    var ne = "sandbox",
      ee = new RegExp("^[a-z-]*(fe|jp)[a-z.-]*$"),
      oe = new RegExp("^[a-z-]*(eu|uk|de)[a-z.-]*$"),
      ae = "https://",
      ie = (function (t, n) {
        for (var e = [], o = t.length, a = 0; a < o; a++) {
          var i = t[a];
          e.push(n(i));
        }
        return e;
      })(
        [
          "payments",
          "payments-eu",
          "payments-sandbox",
          "payments-eu-sandbox",
          "payments-fe",
          "pmt.integ",
          "payments-eu.integ",
          "payments-fe.integ",
          "payments-preprod",
          "payments-eu-preprod-dub.dub.proxy",
          "payments-jp-preprod",
        ],
        function (t) {
          return "https://" + t + ".amazon.com/checkout/signin";
        }
      );
    function re(t) {
      return !!t && ie.indexOf(t.action) >= 0;
    }
    function ue(t) {
      return re(t)
        ? ((n = t.action),
          ((e = document.createElement("a")).href = n),
          e.hostname)
        : null;
      var n, e;
    }
    function ce(t) {
      return oe.test(t) ? "GBP" : ee.test(t) ? "JPY" : "USD";
    }
    function se(t) {
      var e = (function (t, e) {
        if (t) {
          var o = n(
            Array.prototype.slice.call(
              t.querySelectorAll("input[type=hidden]")
            ),
            function (t) {
              return t.name == e;
            }
          )[0];
          if (o) return o.value;
        }
        return "unknown";
      })(t, ne);
      return "unknown" != e && "true" == e;
    }
    function de(t) {
      for (
        var e = 0,
          o = (function (t) {
            var e;
            return (
              t
                ? t instanceof HTMLElement && (e = t.querySelectorAll("form"))
                : (e = document.querySelectorAll("form")),
              e ? n(Array.prototype.slice.call(e), re) : []
            );
          })(t);
        e < o.length;
        e++
      ) {
        var a = o[e];
        if (re(a)) return a;
      }
      return null;
    }
    var le = [],
      me = "/gp/widgets/sessionstabilizer",
      fe = 365,
      he = "true",
      ye = !1;
    function be(t, n) {
      if (null != a(ut)) t();
      else if ((le.push(t), !ye)) {
        var e =
          n ||
          (function () {
            var t,
              n = de();
            if (n) {
              var e = ue(n);
              if (e)
                return (
                  "" +
                  ae +
                  e +
                  me +
                  "?" +
                  l({
                    countryOfEstablishment:
                      ((t = e), oe.test(t) ? "UK" : ee.test(t) ? "JP" : "US"),
                    ledgerCurrency: ce(e),
                    isSandbox: se(n),
                  })
                );
            }
            return null;
          })();
        if (((ye = !0), e)) {
          var i = Rn("GET", e, !0);
          i &&
            ((i.onload = function () {
              if (((ye = !1), i && 200 === i.status)) {
                var t = JSON.parse(i.responseText);
                t && (he = t.apaySessionSet);
              }
              for (o(ut, he, fe, !0); le.length > 0; ) {
                var n = le.pop();
                "function" == typeof n && n();
              }
            }),
            i.send());
        }
      }
    }
    var pe = {
        HTML_BUTTON_RENDER: "apay-html-button-render",
        HTML_BUTTON_RENDER_TAG: "pwa",
        SUB_PAGE_TYPE: "sub-page-type",
        CSS_BUTTON: "css_button",
        PAGE_ACTION: "page-action",
        ADDITIONAL_REQUEST_DATA: "additional-request-data",
        MERCHANT_DOMAIN_KEY: "window",
        SESSION_ID: "session-id",
        CORS_FAILURE: "cors-failure",
        INVALID_RESPONSE: "invalid-response",
        LATENCY: "cookie-creation-latency",
        MAXO_BUTTON: "maxo-button",
        MAXO_BUTTON_RENDER: "maxo-button-render",
        MAXO_WEBLAB_RESPONSE_RECIEVED: "maxo-weblab-response-received",
        MAXO_BUTTON_REDIRECT: "maxo-button-redirect",
        MAXO_BUTTON_CLICK: "maxo-button-click",
        MAXO_BUTTON_TAG: "maxo-button-tag",
        MAXO_BUTTON_RENDER_LATENCY: "maxo-button-render-latency",
        MAXO_BUTTON_REDIRECT_LATENCY: "maxo-button-redirect-latency",
        MAXO_BUTTON_DESIGN: "button-design",
        MAXO_BUTTON_COLOR: "color",
        BUTTON_PLACEMENT: "button-placement",
        CHECKOUT_SESSION_PRODUCT_TYPE: "checkout-session-product-type",
        CHANGE_SHIPPING_ADDRESS: "change-shipping-address",
        CHANGE_PAYMENT_METHOD: "change-payment-method",
        CHECKOUT_SESSION_ID: "checkout-session-id",
        MAXO_ADDITIONAL_INFO: "maxo-additional-info",
        INTEGRATION_TYPE: "integration-type",
        IS_SKIP_PREORDER_PAGE: "is-skip-preorder-page",
        MAXO_DEFAULT_INTEGRATION: "maxo-default-integration",
        SIGNATURE_BUTTON_SESSION_CONFIG: "maxo-button-signature-session-config",
        SIGNATURE_BUTTON_OBJECT: "maxo-button-signature-object",
        SIGNATURE_BUTTON_REDIRECT: "maxo-button-signature-redirect",
        WEBLAB_DATA: "weblab-data",
        MAXO_BUTTON_VIEW_INITIATED: "maxo-button-view-initiated",
        VIEW_TYPE: "viewType",
        BIND_UPGRADE_ACTION: "bind-upgrade-action",
        BIND_RECURRING_UPDATE_ACTION: "bind-recurring-update-action",
        MAXO_JS_LOAD_TIME: "maxo-js-load-time",
        MAXO_PAYMENT_BUTTON_TYPE: "maxo-payment-button-type",
        MAXO_BUTTON_RENDER_COMPLETE: "maxo-button-render-complete",
        PAYMENT_METHOD_ON_FILE_SETUP_INTENT: "setup-intent",
        CHARGE_PERMISSION_TYPE: "chargePermissionType",
        PAYMENT_METHOD_ON_FILE_SETUP_TYPE: "paymentMethodOnFileSetupType",
        CHARGE_PERMISSION_TYPE_PAYMENT_METHOD_ON_FILE: "PAYMENT_METHOD_ON_FILE",
        PAYMENT_METHOD_ON_FILE_SETUP_TYPE_SETUP_ONLY: "SETUP_ONLY",
      },
      _e = (function () {
        function t(t, n) {
          (this.merchantId = t),
            (this.metrics = { counters: [], timings: [], info: [] }),
            (this.metricsPublisher = n);
        }
        return (
          (t.prototype.addCounter = function (t) {
            this.metrics.counters.push(t);
          }),
          (t.prototype.addTiming = function (t) {
            this.metrics.timings.push(t);
          }),
          (t.prototype.addInfo = function (t) {
            this.metrics.info.push(t);
          }),
          (t.prototype.publish = function (t) {
            this.metricsPublisher && this.metricsPublisher(this, t);
          }),
          (t.prototype.reset = function () {
            (this.metrics.timings = []), (this.metrics.counters = []);
          }),
          (t.prototype.toQueryString = function () {
            return (
              "sellerId=" +
              this.merchantId +
              "&data=" +
              encodeURIComponent(JSON.stringify(this.metrics))
            );
          }),
          t
        );
      })(),
      ge = function (t, n, e, o, i) {
        void 0 === i && (i = !1);
        var r = n + "/cs/uedata",
          u = (function (t, n, e) {
            return "" + t + me + "?" + l({ ledgerCurrency: n, isSandbox: e });
          })(n, o, i),
          c =
            t.toQueryString() +
            "&countryOfEstablishment=" +
            e +
            "&ledgerCurrency=" +
            o +
            "&isSandbox=" +
            i;
        be(function () {
          var t = a(ut);
          t && (c = c + "&apaySessionSet=" + encodeURI(t));
          try {
            var n = new Blob([c], {
              type: "application/x-www-form-urlencoded",
            });
            navigator.sendBeacon(r, n);
          } catch (t) {
            var e = Rn("POST", r, !0);
            e &&
              (e.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ),
              (e.onload = function () {}),
              e.send(c));
          }
        }, u);
      };
    function ve(t, n, e) {
      var o = { name: n, time: e, tags: [pe.MAXO_BUTTON_TAG] };
      t.addTiming(o);
    }
    function Ee(t) {
      return !(!t.name || -1 === t.name.indexOf(I));
    }
    function Ae() {
      var t = n(
        window.performance && "function" == typeof window.performance.getEntries
          ? window.performance.getEntries()
          : [],
        Ee
      );
      return t && t.length > 0 ? t[0].duration : 0;
    }
    function Le(t, n, e) {
      return e && (t && "" !== t && (t += "|"), (t += n + ":" + e)), t;
    }
    function Se(t, n) {
      var e =
        pe.INTEGRATION_TYPE +
        ":" +
        (function (t) {
          switch (t) {
            case bt:
              return pe.SIGNATURE_BUTTON_SESSION_CONFIG;
            case pt:
              return pe.SIGNATURE_BUTTON_OBJECT;
            case _t:
              return pe.SIGNATURE_BUTTON_REDIRECT;
            case N:
              return pe.MAXO_DEFAULT_INTEGRATION;
            default:
              return null;
          }
        })(t);
      return (
        n &&
          ((e = Le(e, pe.VIEW_TYPE, n.viewType)),
          (e = Le(e, pe.IS_SKIP_PREORDER_PAGE, n.isSkipPreorderPage)),
          (e = Le(e, pe.MAXO_PAYMENT_BUTTON_TYPE, n.maxoPaymentButtonType)),
          (e = Le(e, pe.CHARGE_PERMISSION_TYPE, n.chargePermissionType)),
          (e = Le(
            e,
            pe.PAYMENT_METHOD_ON_FILE_SETUP_TYPE,
            n.paymentMethodOnFileSetupType
          ))),
        e
      );
    }
    function Te() {
      var t = "",
        n = jn;
      if (n !== {})
        for (var e in n) "" !== t && (t += "|"), (t += e + ":" + n[e]);
      return t;
    }
    function Ce(t, n, e, o, i, r) {
      null == r && (r = window.location.host);
      var u = new _e(t.merchantId),
        c = an.apchsHost,
        s = (function (t) {
          var n;
          return Sn(
            null === (n = null == t ? void 0 : t.createCheckoutSessionConfig) ||
              void 0 === n
              ? void 0
              : n.payloadJSON
          )
            ? pe.PAYMENT_METHOD_ON_FILE_SETUP_INTENT
            : pe.MAXO_BUTTON;
        })(t);
      (o = (function (t, n) {
        var e;
        return (
          Sn(
            null === (e = null == t ? void 0 : t.createCheckoutSessionConfig) ||
              void 0 === e
              ? void 0
              : e.payloadJSON
          ) &&
            (n || (n = {}),
            (n.chargePermissionType =
              pe.CHARGE_PERMISSION_TYPE_PAYMENT_METHOD_ON_FILE),
            (n.paymentMethodOnFileSetupType =
              pe.PAYMENT_METHOD_ON_FILE_SETUP_TYPE_SETUP_ONLY)),
          n
        );
      })(t, o)),
        u.addInfo({ name: pe.SUB_PAGE_TYPE, value: s }),
        u.addInfo({ name: pe.PAGE_ACTION, value: n }),
        u.addInfo({ name: pe.SESSION_ID, value: a(pe.SESSION_ID) }),
        u.addInfo({ name: pe.BUTTON_PLACEMENT, value: t.placement }),
        u.addInfo({
          name: pe.CHECKOUT_SESSION_PRODUCT_TYPE,
          value: t.productType,
        }),
        u.addTiming({ name: pe.MAXO_JS_LOAD_TIME, time: Ae() });
      var d = Te();
      "" !== d && u.addInfo({ name: pe.WEBLAB_DATA, value: d });
      var l =
        pe.MERCHANT_DOMAIN_KEY +
        ":" +
        r +
        "|" +
        pe.MAXO_BUTTON_COLOR +
        ":" +
        t.buttonColor;
      null != o &&
        (o.checkoutSessionId &&
          u.addInfo({
            name: pe.CHECKOUT_SESSION_ID,
            value: o.checkoutSessionId,
          }),
        o.buttonHeight &&
          o.buttonWidth &&
          (l += "|dimension:" + o.buttonWidth + "x" + o.buttonHeight),
        o.inputButtonHeight &&
          o.inputButtonWidth &&
          (l +=
            "|inputButtonDimension:" +
            o.inputButtonWidth +
            "x" +
            o.inputButtonHeight),
        o.renderButtonHeight &&
          o.renderButtonWidth &&
          (l +=
            "|renderButtonDimension:" +
            o.renderButtonWidth +
            "x" +
            o.renderButtonHeight)),
        u.addInfo({ name: pe.ADDITIONAL_REQUEST_DATA, value: l }),
        t.design && u.addInfo({ name: pe.MAXO_BUTTON_DESIGN, value: t.design });
      var m = Se(i, o);
      if (
        ("" !== m && u.addInfo({ name: pe.MAXO_ADDITIONAL_INFO, value: m }),
        u.addCounter({ name: n, tags: [pe.MAXO_BUTTON_TAG] }),
        n === pe.MAXO_BUTTON_RENDER)
      ) {
        var f = pe.MAXO_BUTTON_RENDER_LATENCY;
        i && (f = i + "-render-latency"), ve(u, f, e);
      }
      if (n === pe.MAXO_BUTTON_REDIRECT) {
        f = pe.MAXO_BUTTON_REDIRECT_LATENCY;
        i && (f = i + "-redirect-latency"), ve(u, f, e);
      }
      ge(u, c, an.coe[t.ledgerCurrency], t.ledgerCurrency, t.sandbox);
    }
    var Pe,
      Ie,
      we = function (t) {
        return (
          !y(null == t ? void 0 : t.createCheckoutSession) &&
          y(null == t ? void 0 : t.createCheckoutSessionConfig)
        );
      },
      xe = function (t) {
        return y(null == t ? void 0 : t.createCheckoutSessionConfig);
      },
      Oe = function (t) {
        return "PayOnly" === (null == t ? void 0 : t.productType);
      },
      Ge = function (t) {
        var n;
        return (
          "ProcessOrder" ===
          (null === (n = null == t ? void 0 : t.webCheckoutDetails) ||
          void 0 === n
            ? void 0
            : n.checkoutMode)
        );
      },
      ke = function (t) {
        var n;
        return (
          (null === (n = null == t ? void 0 : t.paymentDetails) || void 0 === n
            ? void 0
            : n.allowOvercharge) || !1
        );
      },
      De = function (t) {
        return "Recurring" === (null == t ? void 0 : t.chargePermissionType);
      },
      ze = function (t) {
        var n;
        return !y(
          null === (n = null == t ? void 0 : t.paymentDetails) || void 0 === n
            ? void 0
            : n.totalOrderAmount
        );
      },
      Ne = 50,
      Me = 17500,
      Be = "alaMessage";
    function Re(t) {
      var n,
        e,
        o = this,
        a = function (t) {
          try {
            return JSON.parse(t);
          } catch (t) {
            console.error("Payload is not in correct Json format");
          }
        },
        i =
          null === (n = null == t ? void 0 : t.createCheckoutSessionConfig) ||
          void 0 === n
            ? void 0
            : n.payloadJSON,
        r = i && a(i),
        u = function (t) {
          var n;
          return (
            t < 150
              ? (n = Pe.PAGE_TYPE_BANNER)
              : t >= 150 && t < 220
              ? ((n = Pe.PAGE_TYPE_PRODUCT), (e = Ie.ALA_CLASS_SM))
              : t >= 220 && t < 349
              ? ((n = Pe.PAGE_TYPE_CART), (e = Ie.ALA_CLASS_MD))
              : t >= 350 && t < 500
              ? ((n = Pe.PAGE_TYPE_CATEGORY), (e = Ie.ALA_CLASS_LG))
              : t >= 500 &&
                ((n = Pe.PAGE_TYPE_CATEGORY), (e = Ie.ALA_CLASS_XL)),
            n
          );
        },
        c = function (n) {
          var e,
            o = an.apchsHost,
            a = {
              merchantId: t.merchantId,
              ledgerCurrency: t.ledgerCurrency,
              affirmEnabled: !1,
              amount:
                null === (e = null == t ? void 0 : t.estimatedOrderAmount) ||
                void 0 === e
                  ? void 0
                  : e.amount,
              pageType: u(n),
              useBestTerms: !0,
              isSandbox: t.sandbox,
            },
            i = Object.keys(a)
              .map(function (t) {
                return t + "=" + a[t];
              })
              .join("&");
          return o + "/" + Be + "?" + i;
        };
      return {
        isValidPayloadForAffirm: function () {
          return (
            "01" === an.regionCode &&
            !(we(t) || xe(t)) &&
            !(Ge(r) || Oe(t) || De(r) || ke(r) || ze(r)) &&
            (function () {
              var n = t.estimatedOrderAmount;
              "string" == typeof n &&
                ((n = a(t.estimatedOrderAmount)), (t.estimatedOrderAmount = n));
              var e = Number(null == n ? void 0 : n.amount);
              return !isNaN(e) && e >= Ne && e <= Me;
            })()
          );
        },
        getALAIfMerchantSignedUpForAffirm: function (t) {
          return p(o, void 0, Promise, function () {
            return _(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 3, , 4]),
                    [4, fetch(c(t), { credentials: "include" })]
                  );
                case 1:
                  return [4, n.sent().json()];
                case 2:
                  return [2, n.sent()];
                case 3:
                  return n.sent(), [2, { affirmEnabled: !1, alaString: "" }];
                case 4:
                  return [2];
              }
            });
          });
        },
        geALATextClass: function () {
          return e;
        },
      };
    }
    !(function (t) {
      (t.PAGE_TYPE_BANNER = "banner"),
        (t.PAGE_TYPE_PRODUCT = "product"),
        (t.PAGE_TYPE_CART = "cart"),
        (t.PAGE_TYPE_CATEGORY = "category");
    })(Pe || (Pe = {})),
      (function (t) {
        (t.ALA_CLASS_SM = "ala-sm"),
          (t.ALA_CLASS_MD = "ala-md"),
          (t.ALA_CLASS_LG = "ala-lg"),
          (t.ALA_CLASS_XL = "ala-xl");
      })(Ie || (Ie = {}));
    var Ue = "promotionalMicrotextMessage",
      He = { EUR: "DE", USD: "NA", GBP: "UK", JPY: "JP" };
    function je(t) {
      var n,
        e = this,
        o =
          null === (n = null == t ? void 0 : t.createCheckoutSessionConfig) ||
          void 0 === n
            ? void 0
            : n.payloadJSON,
        a =
          o &&
          (function (t) {
            try {
              return JSON.parse(t);
            } catch (t) {
              console.error("Payload is not in correct Json format");
            }
          })(o),
        i = function () {
          var n = an.apchsHost,
            e = {
              merchantId: t.merchantId,
              countryOfEstablishment: He[t.ledgerCurrency],
              ledgerCurrency: t.ledgerCurrency,
              isSandbox: t.sandbox,
            },
            o = Object.keys(e)
              .map(function (t) {
                return t + "=" + e[t];
              })
              .join("&");
          return n + "/" + Ue + "?" + o;
        };
      return {
        isValidPayloadForPaymentMethod: function () {
          return rn && !(Ge(a) || Oe(t) || De(a) || ke(a));
        },
        getPromotionalMicrotextIfMerchantEnabledForPaymentMethod: function () {
          return p(e, void 0, Promise, function () {
            return _(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    t.trys.push([0, 3, , 4]),
                    [4, fetch(i(), { credentials: "include" })]
                  );
                case 1:
                  return [4, t.sent().json()];
                case 2:
                  return [2, t.sent()];
                case 3:
                  return (
                    t.sent(),
                    [2, { paymentMethodEnabled: !1, microtextImageURL: "" }]
                  );
                case 4:
                  return [2];
              }
            });
          });
        },
        getPromotionalMicrotextURL: i,
      };
    }
    function Je(t, n) {
      var e = {};
      return (
        n && "09" === an.regionCode
          ? (e.maxoPaymentButtonType = K)
          : (e.maxoPaymentButtonType = t ? F : X),
        e
      );
    }
    var Ye,
      Fe,
      Ke =
        "https://m.media-amazon.com/images/G/01/AmazonPay/Maxo/Affirm-static-upsell-msg-button.svg",
      Xe = "https://cdn-assets.affirm.com/images/black_logo-white_bg.svg";
    function We(t, n, e, o, a) {
      !Hn() &&
        Wn(
          function (e) {
            !(function (t, n, e) {
              Ce(t, pe.MAXO_WEBLAB_RESPONSE_RECIEVED, void 0, n, e);
            })(n, o, a),
              (function (t, n) {
                var e = An(n);
                t &&
                  t.MAXO_BUTTON_CONTENT_EXPERIMENT === At &&
                  e &&
                  !e.contains(lt) &&
                  e.add(dt);
              })(e, t);
          },
          n,
          e
        );
    }
    var qe = function () {
      return !1;
    };
    function Ve(t) {
      var n = t.merchantId;
      return n && n.length > 0 ? M + "-" + n : M;
    }
    function Ze(t) {
      var n = document.createElement("picture");
      pn(t.productType)
        ? n.setAttribute("class", "amazonpay-signin-button-sandbox-logo")
        : n.setAttribute("class", "amazonpay-button-sandbox-logo"),
        (n.ondragstart = qe),
        (n.ondrop = qe);
      var e,
        o = document.createElement("img");
      return (
        (o.src = ((e = t.checkoutLanguage), Kt(Dt, e))), n.appendChild(o), n
      );
    }
    function Qe(t) {
      var n = document.createElement("picture");
      n.setAttribute("class", "amazonpay-button-chevrons"),
        (n.ondragstart = qe),
        (n.ondrop = qe);
      var e,
        o,
        a = document.createElement("img"),
        i = t.buttonColor || q;
      return (
        (a.src =
          ((e = t.checkoutLanguage),
          (o = i) && Yt[o] ? Kt(Yt[o], e) : Kt(zt, e))),
        n.appendChild(a),
        n
      );
    }
    function $e(t) {
      var n = document.createElement("picture");
      pn(t.productType)
        ? n.setAttribute("class", "amazonpay-signin-button-logo")
        : n.setAttribute("class", "amazonpay-button-logo"),
        (n.ondragstart = qe),
        (n.ondrop = qe);
      var e,
        o,
        a = document.createElement("img");
      return (
        pn(t.productType)
          ? (a.src =
              ((e = t.checkoutLanguage),
              (o = t.buttonColor || q),
              Jt[o] && Jt[o][e] ? Kt(Jt[o][e], e) : Kt(Nt, e)))
          : (a.src = (function (t, n, e, o) {
              var a = Ot[n];
              return jt[o] && jt[o][a] && jt[o][a][e] && jt[o][a][e][t]
                ? Kt(jt[o][a][e][t], t)
                : Kt(kt, t);
            })(
              t.checkoutLanguage,
              t.placement,
              t.design || j,
              t.buttonColor || q
            )),
        n.appendChild(a),
        n
      );
    }
    function to(t, n) {
      var e = document.createElement("div");
      return (
        e.setAttribute("class", "amazonpay-button-view1"),
        (e.tabIndex = 0),
        (t.buttonColor = _n(t.buttonColor, t.design)),
        e.classList.add(Gt[t.buttonColor ? t.buttonColor : q]),
        e.appendChild($e(t)),
        t.sandbox && e.appendChild(Ze(t)),
        n && e.appendChild(Qe(t)),
        e
      );
    }
    function no(t) {
      return "ja_JP" === t || /Edge/.test(navigator.userAgent) || Hn()
        ? Kt(Ft[t], t)
        : "https://static-" +
            xt[t].toLowerCase() +
            ".payments-amazon.com/assets/maxo/microtext/" +
            t +
            ".svg";
    }
    function eo(t) {
      var n = document.createElement("picture");
      n.setAttribute("class", "amazonpay-button-microtext"),
        (n.ondragstart = qe),
        (n.ondrop = qe);
      var e = document.createElement("img");
      return (e.src = t), n.appendChild(e), n;
    }
    function oo(t, n) {
      return t ? Ke : no(n.checkoutLanguage);
    }
    function ao(t, n) {
      var e = eo(oo(!1, t));
      return (
        n.classList.remove("amazonpay-button-container-rows-affirm"),
        n.classList.add("amazonpay-button-container-rows"),
        e
      );
    }
    function io(t, n, e, o, a) {
      var i =
        t < 150
          ? eo(oo(!0, n))
          : (function (t, n, e) {
              if (s(t.alaString)) return eo(oo(!0, e));
              var o = document.createElement("div");
              o.setAttribute("class", n.geALATextClass());
              var a = document.createElement("img");
              a.src = Xe;
              var i = document.createElement("span");
              return (
                (i.innerText = t.alaString),
                o.appendChild(i),
                o.appendChild(a),
                o
              );
            })(o, a, n);
      return (
        e.classList.remove("amazonpay-button-container-rows"),
        e.classList.add("amazonpay-button-container-rows-affirm"),
        i
      );
    }
    function ro(t, n, e, o) {
      var a =
        t < 150
          ? ao(n, e)
          : eo(
              (function (t, n, e) {
                return t ? e.microtextImageURL : no(n.checkoutLanguage);
              })(!0, n, o)
            );
      return (
        e.classList.remove("amazonpay-button-container-rows"),
        e.classList.add("amazonpay-button-container-rows-affirm"),
        a
      );
    }
    function uo(t, n, e) {
      return p(this, void 0, Promise, function () {
        var o, a, i, r, u, c, s, d, l, m;
        return _(this, function (f) {
          switch (f.label) {
            case 0:
              return (
                (r = (function (t) {
                  var n;
                  return (
                    t
                      ? (n = t)
                      : (n = document.createElement("div")).setAttribute(
                          "class",
                          "amazonpay-button-view3"
                        ),
                    n
                  );
                })(e)),
                (u = Re(t)),
                (c = je(t)),
                (s = u.isValidPayloadForAffirm()),
                (d = c.isValidPayloadForPaymentMethod()),
                (l = n.clientWidth),
                s ? [4, u.getALAIfMerchantSignedUpForAffirm(l)] : [3, 2]
              );
            case 1:
              return (o = f.sent()), [3, 4];
            case 2:
              return d
                ? [
                    4,
                    c.getPromotionalMicrotextIfMerchantEnabledForPaymentMethod(),
                  ]
                : [3, 4];
            case 3:
              (a = f.sent()), (f.label = 4);
            case 4:
              return (
                (Ye = (function (t, n) {
                  return (
                    Re(t).isValidPayloadForAffirm() &&
                    (null == n ? void 0 : n.affirmEnabled)
                  );
                })(t, o)),
                (Fe = (function (t, n) {
                  return (
                    je(t).isValidPayloadForPaymentMethod &&
                    (null == n ? void 0 : n.paymentMethodEnabled)
                  );
                })(t, a)),
                (m = Je(Ye, Fe)),
                (function (t, n) {
                  Ce(t, pe.MAXO_BUTTON_RENDER_COMPLETE, Ae(), n);
                })(t, m),
                (r.innerHTML = ""),
                (i = Ye ? io(l, t, n, o, u) : Fe ? ro(l, t, n, a) : ao(t, n)),
                r.appendChild(i),
                n.appendChild(r),
                [2]
              );
          }
        });
      });
    }
    function co(t, n, e, o) {
      !(function (t, n) {
        if (((t.style.position = "relative"), !Hn() && !pn(n.productType))) {
          var e = Ve(n);
          t.classList.add(e);
        }
        t.setAttribute("role", "button"),
          t.setAttribute(
            "aria-label",
            n.sandbox ? Xt[n.checkoutLanguage] : Wt[n.checkoutLanguage]
          ),
          (t.title = pn(n.productType) ? Zt[n.checkoutLanguage] : "");
      })(t, e);
      var a,
        i = (function (t) {
          var n = t.attachShadow({ mode: "open" }),
            e = document.createElement("div");
          e.setAttribute(
            "class",
            "amazonpay-button-container amazonpay-button-enabled"
          );
          var o = document.createElement("style");
          return (
            (o.textContent =
              "\n.amazonpay-button-container {\n  display: grid;\n  justify-items: stretch;\n  min-height: 42px;\n  min-width: 113px;\n  max-width: 600px;\n  height: 100%;\n  width: 100%;\n  touch-action: manipulation;\n  max-height: 193px;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n}\n\n.amazonpay-button-container-rows {\n    grid-template-rows: 65% 10% 25%;\n}\n  \n.amazonpay-button-container-rows-affirm {\n  grid-template-rows: 60% 5% 35%;\n}\n\n.amazonpay-custom-button-container-rows {\n    grid-template-rows: 100%;\n}\n\n.amazonpay-button-view1 {\n  grid-row: 1/2;\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 13% 13% 1fr 1fr 10% 16%;\n  grid-template-columns: 4% 10% 6% 1fr 6% 10% 4%;\n  justify-items: center;\n  justify-self: stretch;\n  align-self: stretch;\n}\n\n.amazonpay-button-view1-gold {\n  border-color: #a88734 #9c7e31 #846a29;\n  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);\n}\n\n.amazonpay-button-view1-gray {\n  border-color: #ADB1B8 #A2A6AC #8D9096;\n  background: linear-gradient(to bottom, #F7F8FA, #E7E9EC);\n}\n\n.amazonpay-button-view1-ink {\n border-color: #3d444c #2f353b #2c3137;\n  background: linear-gradient(to bottom, #71777D, #444C54);\n}\n\n.amazonpay-button-enabled {\n  cursor: pointer;\n}\n\n.amazonpay-button-disabled {\n  cursor: default;\n  opacity: 0.25;\n  filter: grayscale(100%);\n}\n\n.amazonpay-button-view1 .amazonpay-button-sandbox-logo {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n\n.amazonpay-button-view1 .amazonpay-button-logo {\n  grid-row: 3/6;\n  grid-column: 4/5;\n}\n\n.amazonpay-button-view1 .amazonpay-signin-button-sandbox-logo {\n  grid-row: 1/3;\n  grid-column: 1/2;\n}\n\n.amazonpay-button-view1 .amazonpay-signin-button-logo {\n  grid-row: 3/6;\n  grid-column: 2/7;\n}\n\n.amazonpay-button-view1 .amazonpay-button-chevrons {\n  grid-row: 3/5;\n  grid-column: 6/7;\n }\n\n.amazonpay-button-view1-gold:active {\n  background: #f0c14b;\n  outline: none;\n  border-color: #e77600;\n  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);\n}\n.amazonpay-button-view1-gray:active {\n  background: #DCDFE3;\n  outline: none;\n  border-color: #e77600;\n  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);\n}\n.amazonpay-button-view1-ink:active {\n  background: #444C54;\n  outline: none;\n  border-color: #32373e #24282d #212429;\n    box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);\n}\n\n.amazonpay-button-view1-gold:focus {\n  outline: none;\n  border-color: #e77600;\n  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);\n}\n.amazonpay-button-view1-gray:focus {\n  outline: none;\n  border-color: #e77600;\n  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);\n}\n.amazonpay-button-view1-ink:focus {\n  outline: none;\n  border-color: #32373e #24282d #212429;\n  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);\n}\n\n.amazonpay-button-view1-gold:hover {\n  background: linear-gradient(to bottom, #f5d78e, #eeb933);\n}\n.amazonpay-button-view1-gray:hover {\n  background: linear-gradient(to bottom, #E6E9EF, #D9DCE1);\n}\n.amazonpay-button-view1-ink:hover {\n  background: linear-gradient(to bottom,  #64696F, #393F47);\n}\n\n.amazonpay-button-view2 {\n  grid-row: 2/3;\n}\n\n.amazonpay-button-view3 {\n  grid-row: 3/4;\n  justify-items: center;\n  justify-self: stretch;\n  align-self: stretch;\n}\n\n.amazonpay-button-view1 .amazonpay-button-sandbox-logo img,\n.amazonpay-button-view1 .amazonpay-signin-button-sandbox-logo img,\n.amazonpay-button-view1 .amazonpay-button-logo img,\n.amazonpay-button-view1 .amazonpay-signin-button-logo img,\n.amazonpay-button-view1 .amazonpay-button-chevrons img,\n.amazonpay-button-view3 .amazonpay-button-microtext img  {\n  display: block;\n  height: 100%;\n  width: 100%;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n\n.amazonpay-button-view1 .amazonpay-button-sandbox-logo img,\n.amazonpay-button-view1 .amazonpay-signin-button-sandbox-logo img,\n.amazonpay-button-view1 .amazonpay-button-logo img,\n.amazonpay-button-view1 .amazonpay-signin-button-logo img,\n.amazonpay-button-view1 .amazonpay-button-chevrons img  {\n  object-fit: contain;\n}\n\n.amazonpay-button-view3 .amazonpay-button-microtext img {\n  object-fit: contain;\n}\n\n.animate-chevron .amazonpay-button-chevrons{\n  -webkit-animation: slide 2s ease-out;\n  -webkit-animation-direction: running;\n  -webkit-animation-iteration-count: 3;\n  -webkit-animation-delay: 0.5s;\n  animation: slide 2s ease-out;\n  animation-direction: running;\n  animation-iteration-count: 3;\n  animation-delay: 0.5s;\n }\n\n@keyframes slide {\n  from {\n    grid-column: 5/6;\n    opacity: 1; \n  }\n  10% {\n    opacity: 0.5;\n  }\n  25% {\n    opacity: 0.1; \n  }\n  50% {\n    grid-column: 5/7;\n    opacity: 1;\n  }\n  60% {\n    opacity:0.5\n  }\n  75% {\n    opacity: 0.1; \n  }\n  to {\n    grid-column: 6/7; \n    opacity: 1;\n  }\n}\n\n  div[class^='ala-'] {\n    text-align: center;\n   }\n\n  .ala-sm span, \n  .ala-md span, \n  .ala-lg span,\n  .ala-xl span {\n    display: inline-block; \n    font-family: \"Amazon Ember\", Arial, sans-serif; \n    margin-right: 5px;\n    line-height: 16px;\n    font-size: 10px;\n    font-weight: bold;\n    text-align: center;\n  }\n\n  .ala-sm img, \n  .ala-md img, \n  .ala-lg img {\n    width: 38.15px;\n    height: 16px;\n    display: inline;\n  }\n\n  .ala-xl img {\n    width: 45.31px;\n    height: 19px;\n  }\n\n  .ala-lg span {\n    font-size: 12px;\n  }\n  .ala-xl span {\n    font-size: 14px;\n  }\n"),
            n.appendChild(o),
            n.appendChild(e),
            e
          );
        })(t);
      (i.id = d("maxo-button-wrapper")),
        pn(e.productType) || bn(e.design)
          ? (i.classList.add("amazonpay-custom-button-container-rows"),
            i.appendChild(to(e, !1)))
          : (i.classList.add("amazonpay-button-container-rows"),
            (function (t, n, e) {
              Un() &&
                Wn(
                  function (o) {
                    Ln(o, t, n, e);
                  },
                  n,
                  !0
                );
            })(t, e, i),
            i.appendChild(to(e, !0)),
            i.appendChild(
              ((a = document.createElement("div")).setAttribute(
                "class",
                "amazonpay-button-view2"
              ),
              a)
            ),
            uo(e, i)),
        (function (t, n, e) {
          t.addEventListener("click", function (t) {
            e(t);
          }),
            t.addEventListener("keyup", function (t) {
              13 == t.keyCode && (t.preventDefault(), e(t));
            });
        })(t, 0, o);
    }
    function so(t, n, e) {
      var o = qt[e.checkoutLanguage],
        a = An(t);
      if (
        (t.setAttribute("aria-label", o),
        (t.title = ""),
        t.addEventListener("click", gn, !0),
        t.addEventListener("keyup", gn, !0),
        (t.style.pointerEvents = "none"),
        !Hn() && !pn(e.productType))
      ) {
        var i = Ve(e);
        t.classList.remove(i);
      }
      var r = t.shadowRoot;
      if (r) {
        var u = r.querySelector(".amazonpay-button-container"),
          c = r.querySelector(".amazonpay-button-view1");
        u &&
          (u.classList.remove("amazonpay-button-enabled"),
          u.classList.add("amazonpay-button-disabled")),
          c && (c.tabIndex = -1),
          a && a.contains(dt) && a.remove(dt),
          a && a.contains(Et) && a.remove(Et);
      }
      Wn(
        function (n) {
          t &&
            En(n) &&
            (t.addEventListener(
              "click",
              function () {
                window.alert(o);
              },
              !0
            ),
            t.addEventListener(
              "keyup",
              function () {
                window.alert(o);
              },
              !0
            ));
        },
        e,
        !0
      );
    }
    var lo,
      mo = "amazonpay-checkout-signature-data-form";
    function fo(t) {
      var n,
        e,
        o = (function (t) {
          var n,
            e = document.createElement("form");
          for (var o in t) {
            var a = document.createElement("input");
            (a.type = "hidden"), (a.name = o);
            var i = t[o],
              r =
                null == (n = i) || "object" != typeof n || Array.isArray(n)
                  ? String(i)
                  : JSON.stringify(i);
            (a.value = r), e.appendChild(a);
          }
          return e;
        })(t);
      return (
        o.setAttribute("style", "display: none !important;"),
        (o.method = "POST"),
        (o.name = mo),
        (o.action = (function (t, n, e) {
          var o = fn(n, e);
          return Object.keys(t).length > 0
            ? "" + o + R + "?" + l(t)
            : "" + o + R;
        })(
          {},
          ((n = t.ledgerCurrency), (e = a(P)), n || e),
          yn(t.checkoutLanguage)
        )),
        o
      );
    }
    function ho(t, n, e) {
      n.addEventListener
        ? n.addEventListener(t, e, !1)
        : n.attachEvent && n.attachEvent("on" + t, e);
    }
    var yo,
      bo = !1,
      po = "maxo_widgets_success",
      _o = "amazonpay-maxo-checkout-freezing-overlay",
      go = "amazonpay-maxo-checkout-freezing-overlay-display-class",
      vo =
        "#" +
        _o +
        " { display: none; } #" +
        _o +
        "." +
        go +
        " { display: block; }",
      Eo =
        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000000; opacity: 0.75; background-color: black; pointerEvents: none;",
      Ao = [
        "amazon.com",
        "amazon.co.uk",
        "amazon.de",
        "amazon.co.jp",
        "amazon.it",
        "amazon.fr",
        "amazon.es",
      ];
    function Lo() {
      lo && !lo.closed && lo.close(), (lo = null);
    }
    function So(t) {
      return t.preventDefault(), t.stopPropagation(), !1;
    }
    function To(t) {
      t && t.classList.toggle(go);
    }
    function Co() {
      To(document.querySelector("#" + _o)),
        window.removeEventListener("keydown", So, !0);
    }
    function Po() {
      clearInterval(yo);
    }
    function Io() {
      var t = document.querySelector("#" + _o);
      if (!t) {
        (t = document.createElement("div")).id = _o;
        var n = document.createElement("style"),
          e = vo;
        t.setAttribute("style", Eo),
          n.appendChild(document.createTextNode(e)),
          t.appendChild(n),
          document.body.appendChild(t),
          (function (t) {
            t &&
              t.addEventListener("click", function () {
                lo && lo.focus();
              });
          })(t);
      }
      To(t);
    }
    function wo(t) {
      if (t && t.data && t.origin && lo) {
        var n = t.origin,
          o = t.data;
        if (
          !e(Ao, function (t) {
            return n.indexOf(t) > -1;
          })
        )
          return;
        Po(),
          Lo(),
          o.action && o.action == po && o.url
            ? (window.location.href = o.url)
            : Co();
      }
    }
    function xo(t) {
      (lo = t),
        ho("message", window, wo),
        ho("beforeunload", window, Lo),
        (yo = window.setInterval(function () {
          lo && lo.closed && (Po(), (lo = null), Co());
        }, 200)),
        Io(),
        window.addEventListener("keydown", So, !0);
    }
    function Oo() {
      return bo;
    }
    function Go(t, n) {
      lo &&
        !lo.closed &&
        (lo.location.href = (function (t, n) {
          return "" + fn(t, n) + H;
        })(t, n));
    }
    var ko = ["amazonCheckoutSessionId", "checkoutSessionId"];
    function Do(t, n, e, o, a) {
      var i = new XMLHttpRequest();
      i.onload = function () {
        if (i.status >= 200 && i.status < 300)
          try {
            var r = JSON.parse(i.responseText),
              u = (function (t, n) {
                if ("object" != typeof t) return null;
                for (var e = 0, o = n; e < o.length; e++) {
                  var a = o[e];
                  if (t && "string" == typeof t[a]) return t[a];
                }
                return null;
              })(r, ko);
            "string" == typeof t.extractAmazonCheckoutSessionId
              ? n(r[t.extractAmazonCheckoutSessionId])
              : "function" == typeof t.extractAmazonCheckoutSessionId
              ? n(t.extractAmazonCheckoutSessionId(r))
              : u
              ? n(u)
              : (a && Go(e, o),
                v(
                  "There is no amazonCheckoutSessionId found in the response: " +
                    i.responseText
                ));
          } catch (t) {
            a && Go(e, o),
              v(
                "Can not parse the result of creating checkout session's response: " +
                  i.responseText
              );
          }
        else
          Go(e, o),
            v(
              "Create checkout session failed, create checkout session error returns " +
                i.status +
                "."
            );
      };
      var r = t.method ? t.method.toUpperCase() : "POST";
      i.open(r, t.url), i.send();
    }
    function zo(t, n, e) {
      if ("object" == typeof t.createCheckoutSession)
        Do(t.createCheckoutSession, n, t.ledgerCurrency, t.checkoutLanguage, e);
      else if ("function" == typeof t.createCheckoutSession) {
        var o = t.createCheckoutSession();
        if ("string" == typeof o) n(o);
        else if ("object" == typeof o && "function" == typeof o.then)
          o.then(function (t) {
            n(t);
          }),
            o.catch(function () {
              e && Go(t.ledgerCurrency, t.checkoutLanguage);
            });
        else if ("object" == typeof o && "string" == typeof o.url) {
          Do(o, n, t.ledgerCurrency, t.checkoutLanguage, e);
        } else
          Go(t.ledgerCurrency, t.checkoutLanguage),
            v(
              "createCheckoutSession has to return a Promise object which can then be resolved into a amazonCheckoutSessionId."
            );
      } else
        Go(t.ledgerCurrency, t.checkoutLanguage),
          v(
            "Wrong type of argument for createCheckoutSession, it accepts an object (required attributes: url) or a function"
          );
    }
    var No = "amazonpay-checkout-signature-data-form",
      Mo = "AMZN-PAY-RSASSA-PSS",
      Bo = "AmazonPayMAXOCheckout";
    function Ro(t, n) {
      Dn(k),
        f() &&
          (function (t, n) {
            zn(z, G, k),
              Ce(t, pe.MAXO_BUTTON_REDIRECT, Bn(z), void 0, n),
              Nn(z),
              Mn(G),
              Mn(k);
          })(t, n);
    }
    function Uo(t, n, e) {
      Un() && Ce(t, pe.MAXO_BUTTON_VIEW_INITIATED, null, { viewType: n }, e);
    }
    function Ho() {
      var t = a(ut);
      return t || "";
    }
    function jo(t, n, e, o, a) {
      var i = fo(
        (function (t, n, e) {
          return {
            amazonCheckoutSessionId: t,
            checkoutLanguage: n.checkoutLanguage,
            ledgerCurrency: n.ledgerCurrency,
            merchantId: n.merchantId,
            productType: n.productType,
            environment: n.sandbox ? "SANDBOX" : "LIVE",
            scopes: n.scopes,
            merchantDomain: window.location.hostname,
            origin_url: window.location.href,
            viewType: e,
            weblabData: Te(),
            apaySessionSet: Ho(),
            estimatedOrderAmount: n.estimatedOrderAmount,
          };
        })(t, n, e)
      );
      a ? a.document.body.appendChild(i) : document.body.appendChild(i),
        o && (Ro(n), Uo(n, e)),
        i.submit();
    }
    function Jo() {
      for (
        var t,
          n = document.querySelectorAll("form[name='" + No + "']"),
          e = 0,
          o = Array.prototype.slice.call(n);
        e < o.length;
        e++
      ) {
        var a = o[e];
        null === (t = a.parentNode) || void 0 === t || t.removeChild(a);
      }
    }
    function Yo(t, n, e) {
      var o,
        a,
        i,
        r = function (o, a) {
          !(function (t, n, e, o, a) {
            var i,
              r = Oo();
            if (t && !r) {
              var u = ln(Bo);
              if (u)
                return (
                  xo(u),
                  (n.viewType = rt),
                  (i = fo(n)),
                  u.document.body.appendChild(i),
                  o && (Ro(e, a), Uo(e, rt, a)),
                  void i.submit()
                );
            }
            (n.viewType = it),
              (i = fo(n)),
              document.body.appendChild(i),
              o && (Ro(e, a), Uo(e, it, a)),
              i.submit();
          })(o, a, t, n, e);
        };
      if (pn(t.productType, t.signInConfig)) {
        "" !==
          (s =
            ((a = t.productType),
            (i = t.signInConfig),
            a === Z && i
              ? ["payloadJSON", "signature", "publicKeyId"]
                  .map(function (t) {
                    return Pn(i, t, function (t) {
                      return (
                        "Missing field " + t + " for signInConfig parameter."
                      );
                    });
                  })
                  .filter(c)
                  .join("\n")
              : "Invalid button definition, productType " +
                a +
                " and configName do not match.\n")) && v(s),
          Jo();
        var u = (function (t) {
          return {
            payloadJSON: t.signInConfig.payloadJSON,
            signature: t.signInConfig.signature,
            publicKeyId: t.signInConfig.publicKeyId,
            publicKeyIdMismatch: t.publicKeyIdMismatch ? "true" : "false",
            checkoutLanguage: t.checkoutLanguage,
            algorithm: t.signInConfig.algorithm || Mo,
            ledgerCurrency: t.ledgerCurrency,
            merchantId: t.merchantId,
            productType: t.productType,
            environment: t.sandbox ? "SANDBOX" : "LIVE",
            scopes: t.scopes,
            merchantDomain: window.location.hostname,
            origin_url: window.location.href,
            viewType: it,
            weblabData: Te(),
            apaySessionSet: Ho(),
          };
        })(t);
        if (1 == t.alwaysRedirect) return void r(!1, u);
        Wn(function (t) {
          r(vn(t), u);
        }, t);
      } else if (t.createCheckoutSessionConfig) {
        var s;
        "" !==
          (s =
            ((o = t.createCheckoutSessionConfig),
            ["payloadJSON", "signature", "publicKeyId"]
              .map(function (t) {
                return Pn(o, t, function (t) {
                  return (
                    "Missing field " +
                    t +
                    " for createCheckoutSessionConfig parameter."
                  );
                });
              })
              .filter(c)
              .join("\n"))) && v(s),
          Jo();
        var d = (function (t) {
          var n = {
            payloadJSON: t.createCheckoutSessionConfig.payloadJSON,
            signature: t.createCheckoutSessionConfig.signature,
            publicKeyId: t.createCheckoutSessionConfig.publicKeyId,
            publicKeyIdMismatch: t.publicKeyIdMismatch ? "true" : "false",
            algorithm: t.createCheckoutSessionConfig.algorithm || Mo,
            checkoutLanguage: t.checkoutLanguage,
            ledgerCurrency: t.ledgerCurrency,
            merchantId: t.merchantId,
            productType: t.productType,
            environment: t.sandbox ? "SANDBOX" : "LIVE",
            scopes: t.scopes,
            merchantDomain: window.location.hostname,
            origin_url: hn(window.location.href),
            viewType: it,
            weblabData: Te(),
            apaySessionSet: Ho(),
            estimatedOrderAmount: t.estimatedOrderAmount,
          };
          return (
            t.platformConnectionId &&
              (n.platformConnectionId = t.platformConnectionId),
            t.createCheckoutSessionConfig.authorizationToken &&
              (n.authorizationToken =
                t.createCheckoutSessionConfig.authorizationToken),
            n
          );
        })(t);
        if (1 == t.alwaysRedirect) return void r(!1, d);
        Wn(function (t) {
          r(vn(t), d);
        }, t);
      } else
        !(function (t, n) {
          Wn(function (e) {
            var o = vn(e),
              a = Oo();
            if (o && !a) {
              var i = ln(Bo);
              if (i)
                return (
                  xo(i),
                  void zo(
                    t,
                    function (e) {
                      jo(e, t, rt, n, i);
                    },
                    i
                  )
                );
            }
            zo(
              t,
              function (e) {
                jo(e, t, it, n, null);
              },
              null
            );
          }, t);
        })(t, n);
    }
    function Fo(t) {
      if ("object" != typeof t)
        v("Missing options parameter for amazon.Pay.initCheckout");
      else {
        Dn(G), wn(t, B, Object.keys(un));
        var n = Gn(t),
          e = N;
        if (t.createCheckoutSessionConfig) {
          e = _t;
          var a =
            ((i = document.referrer),
            ((r = document.createElement("a")).href = i),
            r.hostname);
          Ce(n, pe.MAXO_BUTTON_RENDER, null, null, e, a),
            Ce(n, pe.MAXO_BUTTON_CLICK, null, null, e);
        }
        o(C, n.checkoutLanguage, 1), o(P, t.ledgerCurrency, 1), Yo(n, !0, e);
      }
      var i, r;
    }
    function Ko(t, n, e) {
      if (!y(t) && In(t, null == n ? void 0 : n.sandbox)) {
        n.estimatedOrderAmount = t;
        var o = e && e.shadowRoot;
        if (o)
          uo(
            n,
            o.querySelector(".amazonpay-button-container"),
            o.querySelector(".amazonpay-button-view3")
          );
      }
    }
    function Xo(t, n, e) {
      var o;
      return null == n.createCheckoutSession &&
        null == n.createCheckoutSessionConfig &&
        null == n.signInConfig
        ? {
            returnObject: {
              onClick: function (t) {
                o = t;
              },
              initCheckout: function (t) {
                (n.createCheckoutSession = t.createCheckoutSession),
                  (n.createCheckoutSessionConfig =
                    t.createCheckoutSessionConfig),
                  On(n),
                  t.estimatedOrderAmount &&
                    0 == Object.keys(n.estimatedOrderAmount).length &&
                    (n.estimatedOrderAmount = t.estimatedOrderAmount),
                  t.platformConnectionId &&
                    (n.platformConnectionId = t.platformConnectionId),
                  Dn(G),
                  Yo(n, !0, pt);
              },
              updateButtonInfo: function (t) {
                Ko(t, n, e);
              },
            },
            buttonClickHandler: function () {
              o
                ? o()
                : n.productType !== Z ||
                  n.signInConfig ||
                  v(
                    "Invalid button definition, productType " +
                      n.productType +
                      " and configName do not match."
                  );
            },
          }
        : function () {
            Dn(G);
            var t = N;
            n.createCheckoutSessionConfig && (t = bt);
            var e = Je(Ye, Fe);
            Ce(n, pe.MAXO_BUTTON_CLICK, null, e, t), Yo(n, !0, t);
          };
    }
    var Wo = (function () {
        if ("undefined" != typeof Map) return Map;
        function t(t, n) {
          var e = -1;
          return (
            t.some(function (t, o) {
              return t[0] === n && ((e = o), !0);
            }),
            e
          );
        }
        return (function () {
          function n() {
            this.__entries__ = [];
          }
          return (
            Object.defineProperty(n.prototype, "size", {
              get: function () {
                return this.__entries__.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.get = function (n) {
              var e = t(this.__entries__, n),
                o = this.__entries__[e];
              return o && o[1];
            }),
            (n.prototype.set = function (n, e) {
              var o = t(this.__entries__, n);
              ~o ? (this.__entries__[o][1] = e) : this.__entries__.push([n, e]);
            }),
            (n.prototype.delete = function (n) {
              var e = this.__entries__,
                o = t(e, n);
              ~o && e.splice(o, 1);
            }),
            (n.prototype.has = function (n) {
              return !!~t(this.__entries__, n);
            }),
            (n.prototype.clear = function () {
              this.__entries__.splice(0);
            }),
            (n.prototype.forEach = function (t, n) {
              void 0 === n && (n = null);
              for (var e = 0, o = this.__entries__; e < o.length; e++) {
                var a = o[e];
                t.call(n, a[1], a[0]);
              }
            }),
            n
          );
        })();
      })(),
      qo =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        window.document === document,
      Vo =
        "undefined" != typeof global && global.Math === Math
          ? global
          : "undefined" != typeof self && self.Math === Math
          ? self
          : "undefined" != typeof window && window.Math === Math
          ? window
          : Function("return this")(),
      Zo =
        "function" == typeof requestAnimationFrame
          ? requestAnimationFrame.bind(Vo)
          : function (t) {
              return setTimeout(function () {
                return t(Date.now());
              }, 1e3 / 60);
            },
      Qo = 2;
    var $o = 20,
      ta = [
        "top",
        "right",
        "bottom",
        "left",
        "width",
        "height",
        "size",
        "weight",
      ],
      na = "undefined" != typeof MutationObserver,
      ea = (function () {
        function t() {
          (this.connected_ = !1),
            (this.mutationEventsAdded_ = !1),
            (this.mutationsObserver_ = null),
            (this.observers_ = []),
            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
            (this.refresh = (function (t, n) {
              var e = !1,
                o = !1,
                a = 0;
              function i() {
                e && ((e = !1), t()), o && u();
              }
              function r() {
                Zo(i);
              }
              function u() {
                var t = Date.now();
                if (e) {
                  if (t - a < Qo) return;
                  o = !0;
                } else (e = !0), (o = !1), setTimeout(r, n);
                a = t;
              }
              return u;
            })(this.refresh.bind(this), $o));
        }
        return (
          (t.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t),
              this.connected_ || this.connect_();
          }),
          (t.prototype.removeObserver = function (t) {
            var n = this.observers_,
              e = n.indexOf(t);
            ~e && n.splice(e, 1),
              !n.length && this.connected_ && this.disconnect_();
          }),
          (t.prototype.refresh = function () {
            this.updateObservers_() && this.refresh();
          }),
          (t.prototype.updateObservers_ = function () {
            var t = this.observers_.filter(function (t) {
              return t.gatherActive(), t.hasActive();
            });
            return (
              t.forEach(function (t) {
                return t.broadcastActive();
              }),
              t.length > 0
            );
          }),
          (t.prototype.connect_ = function () {
            qo &&
              !this.connected_ &&
              (document.addEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.addEventListener("resize", this.refresh),
              na
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))
                : (document.addEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0)),
              (this.connected_ = !0));
          }),
          (t.prototype.disconnect_ = function () {
            qo &&
              this.connected_ &&
              (document.removeEventListener(
                "transitionend",
                this.onTransitionEnd_
              ),
              window.removeEventListener("resize", this.refresh),
              this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  "DOMSubtreeModified",
                  this.refresh
                ),
              (this.mutationsObserver_ = null),
              (this.mutationEventsAdded_ = !1),
              (this.connected_ = !1));
          }),
          (t.prototype.onTransitionEnd_ = function (t) {
            var n = t.propertyName,
              e = void 0 === n ? "" : n;
            ta.some(function (t) {
              return !!~e.indexOf(t);
            }) && this.refresh();
          }),
          (t.getInstance = function () {
            return this.instance_ || (this.instance_ = new t()), this.instance_;
          }),
          (t.instance_ = null),
          t
        );
      })(),
      oa = function (t, n) {
        for (var e = 0, o = Object.keys(n); e < o.length; e++) {
          var a = o[e];
          Object.defineProperty(t, a, {
            value: n[a],
            enumerable: !1,
            writable: !1,
            configurable: !0,
          });
        }
        return t;
      },
      aa = function (t) {
        return (t && t.ownerDocument && t.ownerDocument.defaultView) || Vo;
      },
      ia = la(0, 0, 0, 0);
    function ra(t) {
      return parseFloat(t) || 0;
    }
    function ua(t) {
      for (var n = [], e = 1; e < arguments.length; e++)
        n[e - 1] = arguments[e];
      return n.reduce(function (n, e) {
        return n + ra(t["border-" + e + "-width"]);
      }, 0);
    }
    function ca(t) {
      var n = t.clientWidth,
        e = t.clientHeight;
      if (!n && !e) return ia;
      var o = aa(t).getComputedStyle(t),
        a = (function (t) {
          for (
            var n = {}, e = 0, o = ["top", "right", "bottom", "left"];
            e < o.length;
            e++
          ) {
            var a = o[e],
              i = t["padding-" + a];
            n[a] = ra(i);
          }
          return n;
        })(o),
        i = a.left + a.right,
        r = a.top + a.bottom,
        u = ra(o.width),
        c = ra(o.height);
      if (
        ("border-box" === o.boxSizing &&
          (Math.round(u + i) !== n && (u -= ua(o, "left", "right") + i),
          Math.round(c + r) !== e && (c -= ua(o, "top", "bottom") + r)),
        !(function (t) {
          return t === aa(t).document.documentElement;
        })(t))
      ) {
        var s = Math.round(u + i) - n,
          d = Math.round(c + r) - e;
        1 !== Math.abs(s) && (u -= s), 1 !== Math.abs(d) && (c -= d);
      }
      return la(a.left, a.top, u, c);
    }
    var sa =
      "undefined" != typeof SVGGraphicsElement
        ? function (t) {
            return t instanceof aa(t).SVGGraphicsElement;
          }
        : function (t) {
            return (
              t instanceof aa(t).SVGElement && "function" == typeof t.getBBox
            );
          };
    function da(t) {
      return qo
        ? sa(t)
          ? (function (t) {
              var n = t.getBBox();
              return la(0, 0, n.width, n.height);
            })(t)
          : ca(t)
        : ia;
    }
    function la(t, n, e, o) {
      return { x: t, y: n, width: e, height: o };
    }
    var ma = (function () {
        function t(t) {
          (this.broadcastWidth = 0),
            (this.broadcastHeight = 0),
            (this.contentRect_ = la(0, 0, 0, 0)),
            (this.target = t);
        }
        return (
          (t.prototype.isActive = function () {
            var t = da(this.target);
            return (
              (this.contentRect_ = t),
              t.width !== this.broadcastWidth ||
                t.height !== this.broadcastHeight
            );
          }),
          (t.prototype.broadcastRect = function () {
            var t = this.contentRect_;
            return (
              (this.broadcastWidth = t.width),
              (this.broadcastHeight = t.height),
              t
            );
          }),
          t
        );
      })(),
      fa = (function () {
        return function (t, n) {
          var e,
            o,
            a,
            i,
            r,
            u,
            c,
            s =
              ((o = (e = n).x),
              (a = e.y),
              (i = e.width),
              (r = e.height),
              (u =
                "undefined" != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (c = Object.create(u.prototype)),
              oa(c, {
                x: o,
                y: a,
                width: i,
                height: r,
                top: a,
                right: o + i,
                bottom: r + a,
                left: o,
              }),
              c);
          oa(this, { target: t, contentRect: s });
        };
      })(),
      ha = (function () {
        function t(t, n, e) {
          if (
            ((this.activeObservations_ = []),
            (this.observations_ = new Wo()),
            "function" != typeof t)
          )
            throw new TypeError(
              "The callback provided as parameter 1 is not a function."
            );
          (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = e);
        }
        return (
          (t.prototype.observe = function (t) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t instanceof aa(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var n = this.observations_;
              n.has(t) ||
                (n.set(t, new ma(t)),
                this.controller_.addObserver(this),
                this.controller_.refresh());
            }
          }),
          (t.prototype.unobserve = function (t) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t instanceof aa(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var n = this.observations_;
              n.has(t) &&
                (n.delete(t), n.size || this.controller_.removeObserver(this));
            }
          }),
          (t.prototype.disconnect = function () {
            this.clearActive(),
              this.observations_.clear(),
              this.controller_.removeObserver(this);
          }),
          (t.prototype.gatherActive = function () {
            var t = this;
            this.clearActive(),
              this.observations_.forEach(function (n) {
                n.isActive() && t.activeObservations_.push(n);
              });
          }),
          (t.prototype.broadcastActive = function () {
            if (this.hasActive()) {
              var t = this.callbackCtx_,
                n = this.activeObservations_.map(function (t) {
                  return new fa(t.target, t.broadcastRect());
                });
              this.callback_.call(t, n, t), this.clearActive();
            }
          }),
          (t.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
          }),
          (t.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
          }),
          t
        );
      })(),
      ya = "undefined" != typeof WeakMap ? new WeakMap() : new Wo(),
      ba = (function () {
        return function t(n) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var e = ea.getInstance(),
            o = new ha(n, e, this);
          ya.set(this, o);
        };
      })();
    ["observe", "unobserve", "disconnect"].forEach(function (t) {
      ba.prototype[t] = function () {
        var n;
        return (n = ya.get(this))[t].apply(n, arguments);
      };
    });
    var pa = void 0 !== Vo.ResizeObserver ? Vo.ResizeObserver : ba,
      _a = 200,
      ga = 45,
      va = 113,
      Ea = 600,
      Aa = 42,
      La = 600 / 2.6,
      Sa = function (t, n, e) {
        (n =
          n < va
            ? _a
            : Math.max(
                Math.min(n, Math.max(2.6 * e, Aa), Ea),
                Math.min(n, Math.max(10 * e, Aa), Ea),
                va
              )),
          (t.style.width = n + "px"),
          (e =
            e < Aa
              ? ga
              : Math.max(Math.min(e, (1 / 2.6) * n), Math.min(e, 0.1 * n), Aa)),
          (t.style.height = e + "px");
      };
    function Ta(t) {
      var n;
      (n = t).clientWidth < va
        ? (n.style.width = _a + "px")
        : n.clientWidth > Ea && (n.style.width = Ea + "px"),
        n.clientHeight < Aa
          ? (n.style.height = ga + "px")
          : n.clientHeight > La && (n.style.height = La + "px"),
        new pa(function (n, e) {
          for (
            var o = function (n) {
                window.requestAnimationFrame(function () {
                  var e = n.contentRect,
                    o = e.width,
                    a = e.height;
                  (o || a) && Sa(t, o, a);
                });
              },
              a = 0,
              i = n;
            a < i.length;
            a++
          ) {
            o(i[a]);
          }
        }).observe(t),
        window.addEventListener("resize", function () {
          t && (t.style.width = "inherit");
        });
    }
    var Ca = "AmazonPayMAXOChange";
    function Pa(t, n) {
      var e = {
          amazonCheckoutSessionId: t.amazonCheckoutSessionId,
          changeAction: t.changeAction,
          viewType: n,
          skipPreorderPage: t.skipPreorderPage,
        },
        o = a(C);
      return (function (t, n, e) {
        return "" + fn(n, e) + U + "?" + l(t);
      })(e, a(P), o);
    }
    function Ia(t, n) {
      var e,
        o = Ct,
        i = a(P);
      i && (o.ledgerCurrency = i),
        "changeAddress" == t.changeAction
          ? (e = pe.CHANGE_SHIPPING_ADDRESS)
          : "changePayment" == t.changeAction && (e = pe.CHANGE_PAYMENT_METHOD),
        n && t.skipPreorderPage && (n.isSkipPreorderPage = !0),
        Ce(o, e, null, n, null);
    }
    function wa(t) {
      var n = { checkoutSessionId: t.amazonCheckoutSessionId },
        e = { ledgerCurrency: a(P) || null, sandbox: !1 },
        o = function (e) {
          var o = Oo();
          if (e && !o) {
            var a = Pa(t, rt),
              i = ln(Ca, a);
            if (i) return xo(i), (n.viewType = rt), void Ia(t, n);
          }
          var r = Pa(t, it);
          (n.viewType = it), Ia(t, n), (window.location.href = r);
        };
      1 == t.alwaysRedirect
        ? o(!1)
        : Wn(function (t) {
            o(vn(t));
          }, e);
    }
    function xa(t, n) {
      var e, o, a, i;
      mn(t, ht, ft, n),
        mn(t, ht, mt, n),
        (e = t),
        (o = mt),
        (a = [E.CHANGE_ADDRESS, E.CHANGE_PAYMENT]),
        (i = e[o]),
        a.indexOf(i) < 0 &&
          v(
            "Invalid value '" +
              i +
              "' for '" +
              o +
              "', please use one of the available values: " +
              a.join(", ") +
              "."
          );
    }
    function Oa(t) {
      var n = b(b({}, t), {
        changeAction: E.CHANGE_PAYMENT,
        skipPreorderPage: !0,
      });
      xa(n, A.CHANGE_PAYMENT_METHOD), wa(n);
    }
    function Ga(t) {
      var n = b(b({}, t), {
        changeAction: E.CHANGE_ADDRESS,
        skipPreorderPage: !0,
      });
      xa(n, A.CHANGE_SHIPPING_ADDRESS), wa(n);
    }
    var ka = "recurringUpgrade",
      Da = "recurringUpdate";
    function za(t, n) {
      if (n.upgradeAction == ka || n.upgradeAction == Da) {
        var e = fo(
          (function (t) {
            try {
              var n = JSON.parse(t.payloadJSON),
                e = n.merchantId,
                o = {
                  payloadJSON: t.payloadJSON,
                  signature: t.signature,
                  publicKeyId: t.publicKeyId,
                  merchantId: e,
                  algorithm: t.algorithm || Mo,
                  upgradeAction: t.upgradeAction,
                  merchantDomain: window.location.hostname,
                  origin_url: window.location.href,
                };
              return (
                n.checkoutLanguage && (o.checkoutLanguage = n.checkoutLanguage),
                n.scopes && (o.scopes = n.scopes),
                n.productType && (o.productType = n.productType),
                n.ledgerCurrency && (o.ledgerCurrency = n.ledgerCurrency),
                o
              );
            } catch (t) {
              return v("Please pass valid JSON payload for upgradeAction."), {};
            }
          })(n)
        );
        document.body.appendChild(e), e.submit();
      }
    }
    function Na(t, n, e) {
      var o,
        a,
        i,
        r = e.createCheckoutSessionConfig || e.signInConfig;
      if (r && r.payloadJSON)
        try {
          (i = JSON.parse(r.payloadJSON)) &&
            (i.storeId && (o = i.storeId),
            (a = i.webCheckoutDetails
              ? i.webCheckoutDetails.checkoutReviewReturnUrl
              : i.signInReturnUrl));
        } catch (t) {}
      return Rn(
        "GET",
        (function (t, n, e, o) {
          var a,
            i = an.apchsHost,
            r = { ledgerCurrency: n },
            u = m(window.location.href);
          if (u)
            if (u.toLowerCase() === an.boltDomain.toLowerCase()) {
              var c = m(document.referrer);
              r.originDomain = c || u;
            } else r.originDomain = u;
          return (
            e && (r.storeId = e),
            o && (a = m(o)) && (r.returnDomain = a),
            [i, "merchantAccount", t, "accountStatus?" + l(r)].join("/")
          );
        })(t, n, o, a),
        !1
      );
    }
    var Ma = "/checkout/signout",
      Ba = "/checkout/switch-account";
    function Ra(t, n) {
      t && v("amazon.Pay.signout() failed."),
        n && "function" == typeof n && n();
    }
    function Ua(t) {
      var n = a(C),
        e = a(P);
      if (n && e) {
        var o = fn(e, n);
        e === on[nn] ? (n = $t) : e === on[en] && n === $t && (n = tn);
        var i = Rn("GET", "" + o + Ma + "?" + l({ language: n }), !0, !1);
        if (i) {
          (i.onload = function () {
            var n, e;
            if (i)
              try {
                var o = JSON.parse(i.responseText);
                200 == i.status && o
                  ? ((n = o.result),
                    (e = "amazon.Pay.signout() completed successfully."),
                    console.log(g + "\n" + e))
                  : (n = void 0);
              } catch (t) {
                n = void 0;
              } finally {
                Ra(!n, t);
              }
          }),
            (i.onerror = function () {
              Ra(!0, t);
            }),
            i.send();
        }
      }
    }
    function Ha(t) {
      Ua(t.callback);
    }
    function ja(t) {
      return (
        Object.keys(t).forEach(function (n) {
          t[n] || delete t[n];
        }),
        t
      );
    }
    function Ja(t) {
      var n = {};
      if (t && t.dataset) {
        (n.ledgerCurrency = t.dataset.ledgerCurrency),
          (n.sandbox = "true" == t.dataset.sandbox),
          (n.checkoutLanguage = t.dataset.language),
          (n.productType = t.dataset.productType),
          (n.placement = t.dataset.placement),
          (n.design = t.dataset.design),
          (n.buttonColor = t.dataset.buttonColor),
          (n.merchantId = t.dataset.amazonpayMerchantId);
        var e = (function (t) {
          var n = {};
          return (
            (n.amount = t.dataset.amount),
            (n.currencyCode = t.dataset.currencyCode),
            ja(n)
          );
        })(t);
        Object.keys(e).length > 0 && (n.estimatedOrderAmount = e);
        var o = (function (t) {
          var n = {};
          return (
            (n.payloadJSON = t.dataset.payload),
            (n.publicKeyId = t.dataset.publicKeyId),
            (n.signature = t.dataset.signature),
            ja(n)
          );
        })(t);
        if (Object.keys(o).length > 0) n[n.productType == Z ? $ : tt] = o;
        wn(n, B, Object.keys(un));
      }
      return ja(n);
    }
    function Ya(t, n) {
      Array.prototype.forEach.call(t, function (t) {
        var e =
          Math.random().toString(36).substring(2, 6) +
          Math.random().toString(36).substring(2, 4);
        t.classList.add("" + et + e);
        var o = n("." + et + e, Ja(t));
        (function (t) {
          if (!t) return !1;
          var n = "function" == typeof t.onClick,
            e = "function" == typeof t.initCheckout;
          return n && e;
        })(o) &&
          ("function" == typeof window.amznButtonClickHandler
            ? window.amznButtonClickHandler(o)
            : (document.addEventListener(
                "DOMContentLoaded",
                function (t) {
                  "function" == typeof window.amznButtonClickHandler &&
                    window.amznButtonClickHandler(t);
                }.bind(o)
              ),
              ("interactive" !== document.readyState &&
                "complete" !== document.readyState) ||
                v(
                  "Unable to locate a window.amznButtonClickHandler function"
                )));
      });
    }
    var Fa = "UBPSandboxMessage",
      Ka = "APAYCOMPUserActionStripeClick",
      Xa = "APAYCOMPUserActionStripeRender",
      Wa = "APAYCOMPUserActionStripeDismissClick",
      qa = "APAYCOMPUserActionStripeLearnMoreClick",
      Va = {
        CLICK: "maxo-stripe-click",
        RENDER: "maxo-stripe-render",
        DISMISS: "stripe-dismiss-click",
        LEARN_MORE: "stripe-learn-more-click",
      };
    function Za(t, n) {
      var e = new _e(t),
        o = an.apchsHost;
      e.addInfo({ name: pe.PAGE_ACTION, value: n }),
        e.addInfo({ name: pe.SESSION_ID, value: a(pe.SESSION_ID) }),
        e.addInfo({ name: pe.SUB_PAGE_TYPE, value: pe.MAXO_BUTTON });
      var i = window.location.host,
        r = pe.MERCHANT_DOMAIN_KEY + ":" + i;
      e.addInfo({ name: pe.ADDITIONAL_REQUEST_DATA, value: r }),
        e.addCounter({ name: n, tags: [pe.MAXO_BUTTON_TAG] });
      var u = a(P);
      return u && ge(e, o, an.coe[u], u), e.toQueryString();
    }
    function Qa(t) {
      if (!(t && t.data && t.data.data && t.data.data.mType)) return "";
      var n,
        e,
        o = t.data.data.mType,
        a = (function () {
          var t = "[class*=" + M + "]",
            n = document.querySelector(t),
            e = "-1";
          if (n)
            for (var o = n.classList, a = 0; a < o.length; a++) {
              var i = o[a];
              if (0 === i.indexOf(M)) {
                var r = i.lastIndexOf("-");
                if (r === M.length) return (e = i.substr(r + 1));
              }
            }
          return e;
        })(),
        i = "";
      switch (o) {
        case Ka:
          Za(a, Va.CLICK),
            (n = "[class*=" + M + "]"),
            (e = document.querySelector(n)) && e.click(),
            (i = Va.CLICK);
          break;
        case Xa:
          Za(a, Va.RENDER), (i = Va.RENDER);
          break;
        case qa:
          Za(a, Va.LEARN_MORE), (i = Va.LEARN_MORE);
          break;
        case Wa:
          Za(a, Va.DISMISS), (i = Va.DISMISS);
      }
      return i;
    }
    function $a(t) {
      var n;
      t &&
        t.data &&
        t.origin &&
        void 0 !== (n = t) &&
        void 0 !== n.data &&
        n.data.mType === Fa &&
        Qa(t);
    }
    function ti(t, n) {
      mn(t, yt, ft, n);
    }
    var ni = i("amazon.buywithprime");
    (ni.changePaymentMethod = function (t) {
      ti(t.amazonPayOptions, L.CHANGE_PAYMENT_METHOD), Oa(t.amazonPayOptions);
    }),
      (ni.changeShippingAddress = function (t) {
        ti(t.amazonPayOptions, L.CHANGE_PAYMENT_METHOD), Ga(t.amazonPayOptions);
      }),
      (ni.changeAccount = function (t) {
        Ha(t.amazonPayOptions);
      }),
      (ni.initCheckout = function (t) {
        Fo(t.amazonPayOptions);
      });
    var ei = function (t, n) {
        Dn(w);
        var e = Cn("renderButton", t, n),
          a = e.ele,
          i = e.options,
          r = N;
        wn(i, B, Object.keys(un)), On(i), xn(i);
        var u = Gn(i),
          c = d("amazonpaybutton"),
          s = rn
            ? {
                renderButton: co,
                enableButton: function () {},
                disableButton: so,
              }
            : {
                renderButton: $n,
                enableButton: function () {},
                disableButton: te,
              },
          l = a.offsetWidth,
          m = a.offsetHeight;
        Ta(a);
        var h = {
            buttonWidth: a.offsetWidth,
            buttonHeight: a.offsetHeight,
            inputButtonWidth: l,
            inputButtonHeight: m,
            renderButtonWidth: a.offsetWidth,
            renderButtonHeight: a.offsetHeight,
          },
          y = null,
          b = Xo(0, u, a);
        if (
          ("function" == typeof b
            ? s.renderButton(a, c, u, b)
            : (s.renderButton(a, c, u, b.buttonClickHandler),
              (y = b.returnObject) && (r = pt)),
          i.createCheckoutSessionConfig && (r = bt),
          null == y &&
            u.productType !== Z &&
            (y = (function (t, n) {
              return {
                updateButtonInfo: function (e) {
                  Ko(e, t, n);
                },
              };
            })(u, a)),
          o(C, u.checkoutLanguage, 1),
          o(P, i.ledgerCurrency, 1),
          Dn(x),
          f() &&
            (function (t, n, e) {
              var o = Ae();
              zn(D, w, rn ? x : O),
                Ce(t, pe.MAXO_BUTTON_RENDER, o + Bn(D), n, e),
                Nn(D),
                Mn(w),
                Mn(rn ? x : O);
            })(u, h, r),
          (function (t, n, e, o) {
            if (!o.sandbox) {
              var a = Na(o.merchantId, o.ledgerCurrency, o);
              !(function (t, n, e) {
                t && ((t.onload = n), (t.onerror = e), t.send());
              })(
                a,
                function () {
                  if (a)
                    try {
                      var i = JSON.parse(a.responseText);
                      200 == a.status &&
                        i &&
                        i.merchantAccountStatus !== T &&
                        e.disableButton(t, n, o);
                    } catch (t) {}
                },
                function () {}
              );
            }
          })(a, c, s, u),
          setTimeout(function () {
            !Hn() && Un() && Xn(u), We(a, u, !0, h, r);
          }, 0),
          y)
        )
          return y;
      },
      oi = i("amazon.Pay");
    return (
      (oi.renderButton = ei),
      (oi.bindChangeAction = function (t, n) {
        var e = Cn("bindChangeAction", t, n),
          o = e.ele,
          a = e.options;
        xa(a, A.BIND_CHANGE_ACTION),
          o.addEventListener("click", function () {
            wa(a);
          });
      }),
      (oi.bindUpgradeAction = function (t, n) {
        var e,
          o =
            ((e = n),
            ["payloadJSON", "signature", "publicKeyId", "upgradeAction"]
              .map(function (t) {
                return Pn(e, t, function (t) {
                  return (
                    "Missing field " + t + " for bindUpgradeAction parameter."
                  );
                });
              })
              .filter(c)
              .join("\n"));
        "" !== o && v(o);
        var a = Cn("bindUpgradeAction", t, n),
          i = a.ele,
          r = a.options;
        !(function (t) {
          try {
            var n = JSON.parse(t.payloadJSON),
              e = Ct;
            (e.merchantId = n.merchantId),
              (e.ledgerCurrency = n.ledgerCurrency),
              t.upgradeAction == ka
                ? Ce(e, pe.BIND_UPGRADE_ACTION, null, null, null)
                : t.upgradeAction == Da &&
                  Ce(e, pe.BIND_RECURRING_UPDATE_ACTION, null, null, null);
          } catch (t) {}
        })(n),
          i.addEventListener("click", function () {
            za(0, r);
          });
      }),
      (oi.signout = Ua),
      (oi.initCheckout = Fo),
      (oi.switchAccount = function (t) {
        var n = a(C),
          e = a(P),
          o = t.merchantId,
          i = t.SignInConfig.payloadJSON,
          r = t.SignInConfig.signature,
          u = t.SignInConfig.publicKeyId,
          c = t.placement,
          s = t.sandbox;
        if (n && e) {
          var d = fn(e, n);
          e === on[nn] ? (n = $t) : e === on[en] && n === $t && (n = tn);
          var m =
            "" +
            d +
            Ba +
            "?" +
            l({
              language: n,
              merchantId: o,
              ledgerCurrency: e,
              payloadJSON: i,
              signature: r,
              publicKeyId: u,
              placement: c,
              sandbox: s,
            });
          window.location.replace(m);
        }
      }),
      (oi.changePaymentMethod = Oa),
      (oi.changeShippingAddress = Ga),
      (oi.changeAccount = Ha),
      (function t(n) {
        var e = document.querySelectorAll(nt);
        e && e.length > 0
          ? Ya(e, n)
          : document.addEventListener("DOMContentLoaded", function () {
              t(n);
            });
      })(ei),
      ho("beforeunload", window, function () {
        bo = !0;
      }),
      void 0 !== window.postMessage && ho("message", window, $a),
      (t.renderButton = ei),
      t
    );
  })({}));
