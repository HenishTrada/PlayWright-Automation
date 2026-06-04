# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day06/searchProductItem.spec.ts >> Search Product Item
- Location: tests/Day06/searchProductItem.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.a-label.a-checkbox-label').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Shortcuts menu" [ref=e3]:
    - heading "Skip to" [level=2] [ref=e4]
    - list "Skip to" [ref=e5]:
      - listitem [ref=e6]:
        - link "main content" [ref=e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
      - listitem [ref=e8]:
        - link "Shopping cart" [ref=e9] [cursor=pointer]:
          - /url: "#sc-active-cart"
          - text: Your Amazon Cart
    - separator [ref=e10]
    - heading "Keyboard shortcuts" [level=2] [ref=e11]
    - list "Keyboard shortcuts" [ref=e12]:
      - listitem [ref=e13]:
        - link "Search, alt, forward slash" [ref=e14] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e15]:
            - generic [ref=e16]: Search
            - generic [ref=e17]:
              - generic [ref=e18]: alt
              - generic [ref=e19]: +
              - generic [ref=e20]: /
      - listitem [ref=e21]:
        - link "Cart, shift, alt, c" [ref=e22] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e23]:
            - generic [ref=e24]: Cart
            - generic [ref=e25]:
              - generic [ref=e26]: shift
              - generic [ref=e27]: +
              - generic [ref=e28]: alt
              - generic [ref=e29]: +
              - generic [ref=e30]: C
      - listitem [ref=e31]:
        - link "Home, shift, alt, h" [ref=e32] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e33]:
            - generic [ref=e34]: Home
            - generic [ref=e35]:
              - generic [ref=e36]: shift
              - generic [ref=e37]: +
              - generic [ref=e38]: alt
              - generic [ref=e39]: +
              - generic [ref=e40]: H
      - listitem [ref=e41]:
        - link "Your orders, shift, alt, o" [ref=e42] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e43]:
            - generic [ref=e44]: Orders
            - generic [ref=e45]:
              - generic [ref=e46]: shift
              - generic [ref=e47]: +
              - generic [ref=e48]: alt
              - generic [ref=e49]: +
              - generic [ref=e50]: O
      - listitem [ref=e51]:
        - button "Show/hide shortcuts, shift, alt, z" [ref=e52] [cursor=pointer]:
          - generic [ref=e53]:
            - generic [ref=e54]: Show/Hide shortcuts
            - generic [ref=e55]:
              - generic [ref=e56]: shift
              - generic [ref=e57]: +
              - generic [ref=e58]: alt
              - generic [ref=e59]: +
              - generic [ref=e60]: Z
    - generic [ref=e66]: To move between items, use your keyboard's up or down arrows.
  - banner [ref=e67]:
    - navigation "Primary" [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link "Amazon.in" [ref=e72] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Ahmedabad 380051 Update location" [ref=e75] [cursor=pointer]:
            - generic [ref=e77]:
              - generic [ref=e78]: Delivering to Ahmedabad 380051
              - generic [ref=e79]: Update location
        - search [ref=e82]:
          - generic [ref=e85]:
            - generic [ref=e87]: All
            - combobox "Select the department you want to search in" [ref=e89] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=e92]
          - generic "Go" [ref=e95] [cursor=pointer]:
            - button "Go" [ref=e96]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e100] [cursor=pointer]:
              - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
              - generic [ref=e103]:
                - img "India" [ref=e104]
                - generic [ref=e105]: EN
            - button "Expand to Change Language or Country" [ref=e106] [cursor=pointer]
          - generic [ref=e107]:
            - link "Hello, sign in Account & Lists" [ref=e108] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcart%2Fview.html%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
              - generic [ref=e110]: Hello, sign in
              - generic [ref=e111]: Account & Lists
            - button "Expand Account and Lists" [ref=e112] [cursor=pointer]
          - link "Returns & Orders" [ref=e113] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e114]: Returns
            - generic [ref=e115]: "& Orders"
          - link "1 item in cart" [ref=e116] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e118]: "1"
            - generic [ref=e121]: Cart
      - generic [ref=e122]:
        - button "Open All Categories Menu" [ref=e124] [cursor=pointer]:
          - generic [ref=e126]: All
        - list [ref=e130]:
          - listitem [ref=e131]:
            - link "Fresh" [ref=e133] [cursor=pointer]:
              - /url: /fresh?ref_=nav_cs_fresh
          - listitem [ref=e134]:
            - link "MX Player" [ref=e136] [cursor=pointer]:
              - /url: /minitv?ref_=nav_avod_desktop_topnav
          - listitem [ref=e137]:
            - link "Sell" [ref=e139] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e140]:
            - link "Bestsellers" [ref=e142] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e143]:
            - link "Today's Deals" [ref=e145] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e146]:
            - link "Mobiles" [ref=e148] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e149]:
            - generic [ref=e150]:
              - link "Prime" [ref=e151] [cursor=pointer]:
                - /url: /prime?ref_=nav_cs_primelink_nonmember
              - button "Prime Details" [ref=e152] [cursor=pointer]
          - listitem [ref=e153]:
            - link "New Releases" [ref=e155] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e156]:
            - link "Customer Service" [ref=e158] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e159]:
            - link "Amazon Pay" [ref=e161] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e162]:
            - link "Electronics" [ref=e164] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e165]:
            - link "Fashion" [ref=e167] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e168]:
            - link "Home & Kitchen" [ref=e170] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e171]:
            - link "Computers" [ref=e173] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e174]:
            - link "Toys & Games" [ref=e176] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e177]:
            - link "Car & Motorbike" [ref=e179] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e180]:
            - link "Beauty & Personal Care" [ref=e182] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e183]:
            - link "Gift Cards" [ref=e185] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e186]:
            - link "Home Improvement" [ref=e188] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e189]:
            - link "Health, Household & Personal Care" [ref=e191] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e192]:
            - link "Video Games" [ref=e194] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e195]:
            - link "Grocery & Gourmet Foods" [ref=e197] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e198]:
            - link "Custom Products" [ref=e200] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e201]:
            - link "Sports, Fitness & Outdoors" [ref=e203] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e204]:
            - link "Books" [ref=e206] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e207]:
            - link "Baby" [ref=e209] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e210]:
            - link "Pet Supplies" [ref=e212] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e213]:
            - link "Audible" [ref=e215] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e216]:
            - link "AmazonBasics" [ref=e218] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e219]:
            - link "Subscribe & Save" [ref=e221] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e222]:
            - link "Kindle eBooks" [ref=e224] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e225]:
            - link "Flights" [ref=e227] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
  - main [ref=e232]:
    - heading "All Carts" [level=1] [ref=e233]
    - generic [ref=e237]:
      - generic [ref=e240]:
        - img [ref=e242]
        - generic [ref=e243]:
          - heading "Your Amazon Cart is empty" [level=3] [ref=e244]
          - link "Shop today’s deals" [ref=e246] [cursor=pointer]:
            - /url: /gp/goldbox/ref=cart_empty_deals
          - generic [ref=e247]:
            - link "Sign in to your account" [ref=e250] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/signin/ref=cart_empty_sign_in?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fcart%3Fapp-nav-type%3Dnone%26dc%3Ddf&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
            - link "Sign up now" [ref=e253] [cursor=pointer]:
              - /url: https://www.amazon.in/ap/register?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fcart%3Fapp-nav-type%3Dnone%26dc%3Ddf&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
      - generic [ref=e257]:
        - paragraph [ref=e259]: The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
        - paragraph [ref=e260]: Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
  - complementary "Your recently viewed items and featured recommendations" [ref=e261]:
    - generic [ref=e269]:
      - heading "See personalized recommendations" [level=2] [ref=e270]
      - link "Sign in" [ref=e273] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
      - generic [ref=e274]:
        - text: New customer?
        - link "Start here." [ref=e275] [cursor=pointer]:
          - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
  - generic [ref=e276]:
    - button "Back to top" [ref=e277] [cursor=pointer]:
      - generic [ref=e278]: Back to top
    - generic [ref=e279]:
      - generic [ref=e280]:
        - heading "Get to Know Us" [level=6] [ref=e281]
        - list [ref=e282]:
          - listitem [ref=e283]:
            - link "About Amazon" [ref=e284] [cursor=pointer]:
              - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e285]:
            - link "Careers" [ref=e286] [cursor=pointer]:
              - /url: https://amazon.jobs
          - listitem [ref=e287]:
            - link "Press Releases" [ref=e288] [cursor=pointer]:
              - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
          - listitem [ref=e289]:
            - link "Amazon Science" [ref=e290] [cursor=pointer]:
              - /url: https://www.amazon.science
      - generic [ref=e292]:
        - heading "Connect with Us" [level=6] [ref=e293]
        - list [ref=e294]:
          - listitem [ref=e295]:
            - link "Facebook" [ref=e296] [cursor=pointer]:
              - /url: https://www.facebook.com/AmazonIN
          - listitem [ref=e297]:
            - link "Twitter" [ref=e298] [cursor=pointer]:
              - /url: https://x.com/AmazonIN
          - listitem [ref=e299]:
            - link "Instagram" [ref=e300] [cursor=pointer]:
              - /url: https://www.instagram.com/amazondotin
      - generic [ref=e302]:
        - heading "Make Money with Us" [level=6] [ref=e303]
        - list [ref=e304]:
          - listitem [ref=e305]:
            - link "Sell on Amazon" [ref=e306] [cursor=pointer]:
              - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
          - listitem [ref=e307]:
            - link "Sell under Amazon Accelerator" [ref=e308] [cursor=pointer]:
              - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
          - listitem [ref=e309]:
            - link "Protect and Build Your Brand" [ref=e310] [cursor=pointer]:
              - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
          - listitem [ref=e311]:
            - link "Amazon Global Selling" [ref=e312] [cursor=pointer]:
              - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
          - listitem [ref=e313]:
            - link "Supply to Amazon" [ref=e314] [cursor=pointer]:
              - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
          - listitem [ref=e315]:
            - link "Become an Affiliate" [ref=e316] [cursor=pointer]:
              - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
          - listitem [ref=e317]:
            - link "Fulfilment by Amazon" [ref=e318] [cursor=pointer]:
              - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
          - listitem [ref=e319]:
            - link "Advertise Your Products" [ref=e320] [cursor=pointer]:
              - /url: https://advertising.amazon.in/?ref=Amz.in
          - listitem [ref=e321]:
            - link "Amazon Pay on Merchants" [ref=e322] [cursor=pointer]:
              - /url: https://www.amazonpay.in/merchant
      - generic [ref=e324]:
        - heading "Let Us Help You" [level=6] [ref=e325]
        - list [ref=e326]:
          - listitem [ref=e327]:
            - link "Your Account" [ref=e328] [cursor=pointer]:
              - /url: /gp/css/homepage.html?ref_=footer_ya
          - listitem [ref=e329]:
            - link "Returns Centre" [ref=e330] [cursor=pointer]:
              - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
          - listitem [ref=e331]:
            - link "Recalls and Product Safety Alerts" [ref=e332] [cursor=pointer]:
              - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
          - listitem [ref=e333]:
            - link "100% Purchase Protection" [ref=e334] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
          - listitem [ref=e335]:
            - link "Amazon App Download" [ref=e336] [cursor=pointer]:
              - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
          - listitem [ref=e337]:
            - link "Help" [ref=e338] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
    - generic [ref=e340]:
      - link "Amazon India Home" [ref=e343] [cursor=pointer]:
        - /url: /ref=footer_logo
      - generic [ref=e346]:
        - generic [ref=e347]:
          - link "Choose a language for shopping. Current selection is English." [ref=e348] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
            - generic [ref=e350]: English
          - button "Expand to Change Language or Country" [ref=e351] [cursor=pointer]
        - button "Choose a country/region for shopping. The current selection is India." [ref=e352] [cursor=pointer]:
          - generic [ref=e354]: India
    - generic "More on Amazon" [ref=e355]:
      - generic "More on Amazon" [ref=e356]:
        - list [ref=e357]:
          - listitem [ref=e358]:
            - link "AbeBooks Books, art & collectibles" [ref=e359] [cursor=pointer]:
              - /url: https://www.abebooks.com/
              - heading "AbeBooks" [level=5] [ref=e360]
              - generic [ref=e361]:
                - text: Books, art
                - text: "& collectibles"
          - listitem [ref=e362]
          - listitem [ref=e363]:
            - link "Amazon Web Services Scalable Cloud Computing Services" [ref=e364] [cursor=pointer]:
              - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
              - heading "Amazon Web Services" [level=5] [ref=e365]
              - generic [ref=e366]:
                - text: Scalable Cloud
                - text: Computing Services
          - listitem [ref=e367]
          - listitem [ref=e368]:
            - link "Audible Download Audio Books" [ref=e369] [cursor=pointer]:
              - /url: https://www.audible.in/
              - heading "Audible" [level=5] [ref=e370]
              - generic [ref=e371]:
                - text: Download
                - text: Audio Books
          - listitem [ref=e372]
          - listitem [ref=e373]:
            - link "IMDb Movies, TV & Celebrities" [ref=e374] [cursor=pointer]:
              - /url: https://www.imdb.com/
              - heading "IMDb" [level=5] [ref=e375]
              - generic [ref=e376]:
                - text: Movies, TV
                - text: "& Celebrities"
        - list [ref=e377]:
          - listitem [ref=e378]:
            - link "Shopbop Designer Fashion Brands" [ref=e379] [cursor=pointer]:
              - /url: https://www.shopbop.com/
              - heading "Shopbop" [level=5] [ref=e380]
              - generic [ref=e381]:
                - text: Designer
                - text: Fashion Brands
          - listitem [ref=e382]
          - listitem [ref=e383]:
            - link "Amazon Business Everything For Your Business" [ref=e384] [cursor=pointer]:
              - /url: /business?ref=footer_aingw
              - heading "Amazon Business" [level=5] [ref=e385]
              - generic [ref=e386]:
                - text: Everything For
                - text: Your Business
          - listitem [ref=e387]
          - listitem [ref=e388]:
            - link "Amazon Music Stream millions of songs" [ref=e389] [cursor=pointer]:
              - /url: /music/player?ref=footer_apm
              - heading "Amazon Music" [level=5] [ref=e390]
              - generic [ref=e391]: Stream millions of songs
          - listitem [ref=e392]
          - listitem [ref=e393]
    - generic [ref=e394]:
      - list [ref=e395]:
        - listitem [ref=e396]:
          - link "Conditions of Use & Sale" [ref=e397] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
        - listitem [ref=e398]:
          - link "Privacy Notice" [ref=e399] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
        - listitem [ref=e400]:
          - link "Interest-Based Ads" [ref=e401] [cursor=pointer]:
            - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
      - generic [ref=e402]: © 1996-2026, Amazon.com, Inc. or its affiliates
  - iframe [ref=e404]:
    - iframe [ref=f5e2]:
      - generic [active] [ref=f6e1]:
        - img [ref=f6e2]
        - img [ref=f6e3]
        - img [ref=f6e4]
        - img [ref=f6e5]
        - img [ref=f6e6]
        - img [ref=f6e7]
        - img [ref=f6e8]
        - img [ref=f6e9]
        - img [ref=f6e10]
        - img [ref=f6e11]
        - img [ref=f6e12]
        - img [ref=f6e13]
        - img [ref=f6e14]
```

# Test source

```ts
  1  | import {Page, Locator, expect} from "@playwright/test"
  2  | 
  3  | export class Cartpage{
  4  | 
  5  |     page : Page;
  6  |     giftCheckBox : Locator;
  7  |     incrementButton : Locator;
  8  |     proceedToButButton : Locator;
  9  | 
  10 |     constructor(page : Page){
  11 | 
  12 |         this.page = page;
  13 |         this.giftCheckBox = page.locator('.a-label.a-checkbox-label').first();
  14 |         this.incrementButton = page.locator('.a-icon.a-icon-small-add');
  15 |         this.proceedToButButton = page.locator(`input[name='proceedToRetailCheckout']`);
  16 | 
  17 |     }
  18 | 
  19 |     async enableGiftCheckBox(){
> 20 |         await this.giftCheckBox.check();
     |                                 ^ Error: locator.check: Test timeout of 30000ms exceeded.
  21 |         await expect(this.giftCheckBox).toBeChecked();
  22 |     }
  23 | 
  24 |     async increaseCartItem(){
  25 |         await this.incrementButton.click();
  26 |     }
  27 | 
  28 |     async proceedingToCheckout(){
  29 |         await this.proceedToButButton.waitFor({state : "visible"});
  30 |         await this.proceedToButButton.click();
  31 |     }
  32 | }
```