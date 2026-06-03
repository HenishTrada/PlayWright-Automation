# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day02/ikeaLocatorStrategy.spec.ts >> search for a product
- Location: tests/Day02/ikeaLocatorStrategy.spec.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="plp-product-card"]').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Skip to main content":
      - /url: "#hnf-content"
      - generic:
        - generic: Skip to main content
    - banner [ref=e3]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - button "Change language or country/region, current language is English":
            - generic:
              - img
              - generic: INEnglish
        - generic [ref=e8]:
          - generic [ref=e9]:
            - button "Enter postal code":
              - generic:
                - img
                - generic: Enter postal code
          - button "Select store":
            - generic:
              - img
              - generic: Select store
      - generic [ref=e11]:
        - link "IKEA Home" [ref=e13] [cursor=pointer]:
          - /url: https://www.ikea.com/in/en/
        - navigation "Open the navigation menu" [ref=e16]:
          - button "Products"
          - button "Rooms"
          - button "Offers"
          - button "Inspiration"
          - button "Design/Support"
        - search [ref=e22]:
          - generic [ref=e23]:
            - combobox "Search for products, inspiration or new arrivals" [ref=e24]: sofa cum bed
            - button "Clear the search input field" [ref=e25] [cursor=pointer]:
              - generic:
                - img
                - generic: Clear the search input field
            - button "Search" [ref=e27] [cursor=pointer]:
              - generic:
                - img
                - generic: Search
        - navigation "Shopping links" [ref=e28]:
          - list [ref=e29]:
            - listitem [ref=e30]:
              - link "Hej! Log in" [ref=e32] [cursor=pointer]:
                - /url: https://www.ikea.com/in/en/profile/login
                - generic:
                  - img
                  - generic: Hej! Log in
            - listitem [ref=e33]:
              - link "Shopping list" [ref=e35] [cursor=pointer]:
                - /url: https://www.ikea.com/in/en/favourites/
                - generic:
                  - img
                  - generic: Shopping list
            - listitem [ref=e36]:
              - link "Shopping bag" [ref=e38] [cursor=pointer]:
                - /url: https://www.ikea.com/in/en/shoppingcart/
                - generic:
                  - img
                  - generic: Shopping bag
    - generic:
      - complementary "Floating action buttons"
  - main [ref=e39]:
    - generic [ref=e40]:
      - status [ref=e41]
      - generic [ref=e43]:
        - generic [ref=e45]: Loading search results
        - generic [ref=e46]: Loading search results
  - contentinfo [ref=e48]:
    - generic [ref=e49]:
      - heading "Footer" [level=2] [ref=e50]
      - generic [ref=e51]:
        - generic [ref=e52]:
          - generic [ref=e53]:
            - heading "Join IKEA Family" [level=3] [ref=e54]
            - paragraph [ref=e56]: Enjoy member-only discounts & offers, early access to IKEA sale, delicious food offers and much more. Join for free.
            - paragraph [ref=e57]:
              - link "See more" [ref=e58] [cursor=pointer]:
                - /url: https://www.ikea.com/in/en/ikea-family/
            - link "Join the club" [ref=e59] [cursor=pointer]:
              - /url: https://www.ikea.com/in/en/profile/signup/?itm_campaign=ikeafamily_signup&itm_element=footercta&itm_content=ikeafamily
              - generic:
                - generic: Join the club
          - generic [ref=e60]:
            - heading "IKEA Business Network" [level=3] [ref=e61]
            - paragraph [ref=e63]: Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials and a lot more.
            - paragraph [ref=e64]:
              - link "See more" [ref=e65] [cursor=pointer]:
                - /url: https://www.ikea.com/in/en/ikea-business/
            - link "Join now" [ref=e66] [cursor=pointer]:
              - /url: https://in.accounts.ikea.com/en/identity/biz-signup/network/
              - generic:
                - generic: Join now
        - list [ref=e68]:
          - listitem [ref=e69]:
            - heading "IKEA Family" [level=3] [ref=e70]:
              - generic: IKEA Family
            - list "IKEA Family Log in Join IKEA Family Member offers Workshops & Events" [ref=e71]:
              - listitem [ref=e72]:
                - link "Log in" [ref=e73] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/profile/login
              - listitem [ref=e74]:
                - link "Join IKEA Family" [ref=e75] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/profile/signup/family/
              - listitem [ref=e76]:
                - link "Member offers" [ref=e77] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/offers/family-offers/
              - listitem [ref=e78]:
                - link "Workshops & Events" [ref=e79] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/stores/events/#/store
          - listitem [ref=e80]:
            - heading "Services" [level=3] [ref=e81]:
              - generic: Services
            - list "Services Delivery Service Click & collect Personal shopper Online planning tool Assembly Service Measuring Service Kitchen Planning Installation Service Track & manage your order Customer Service Recycle Program" [ref=e82]:
              - listitem [ref=e83]:
                - link "Delivery Service" [ref=e84] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/delivery-service-pubd5889e60/
              - listitem [ref=e85]:
                - link "Click & collect" [ref=e86] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/services/click-and-collect-shopping-at-ikea-stores-pubada7dae3/
              - listitem [ref=e87]:
                - link "Personal shopper" [ref=e88] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/services/personal-shopper-pubdc2b0ed0/
              - listitem [ref=e89]:
                - link "Online planning tool" [ref=e90] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/planners/
              - listitem [ref=e91]:
                - link "Assembly Service" [ref=e92] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/services/assembly/
              - listitem [ref=e93]:
                - link "Measuring Service" [ref=e94] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/measuring-service-pub2ecf8410/
              - listitem [ref=e95]:
                - link "Kitchen Planning" [ref=e96] [cursor=pointer]:
                  - /url: https://kitchen.planner.ikea.com/in/en/
              - listitem [ref=e97]:
                - link "Installation Service" [ref=e98] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/installation-service-pub7f1a7a60/
              - listitem [ref=e99]:
                - link "Track & manage your order" [ref=e100] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/purchases/lookup/
              - listitem [ref=e101]:
                - link "Customer Service" [ref=e102] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/
              - listitem [ref=e103]:
                - link "Recycle Program" [ref=e104] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/product-guides/sustainable-products/recycle-program-pub1a5a43b0/
          - listitem [ref=e105]:
            - heading "Help" [level=3] [ref=e106]:
              - generic: Help
            - list "Help How to shop Return policy Prices and price tags Contact us FAQ's Gift Card Terms and conditions Damaged articles claim GST rate revision" [ref=e107]:
              - listitem [ref=e108]:
                - link "How to shop" [ref=e109] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/shopping-at-ikea/
              - listitem [ref=e110]:
                - link "Return policy" [ref=e111] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/returns-claims/return-policy/
              - listitem [ref=e112]:
                - link "Prices and price tags" [ref=e113] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/price-guarantee-pub2acecd51/
              - listitem [ref=e114]:
                - link "Contact us" [ref=e115] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/support/
              - listitem [ref=e116]:
                - link "FAQ's" [ref=e117] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/faq-pub7f08ed41/
              - listitem [ref=e118]:
                - link "Gift Card" [ref=e119] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/ikea-gift-cards-pub004138e1/
              - listitem [ref=e120]:
                - link "Terms and conditions" [ref=e121] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/terms-conditions/
              - listitem [ref=e122]:
                - link "Damaged articles claim" [ref=e123] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/customer-service/track-manage-order/
              - listitem [ref=e124]:
                - link "GST rate revision" [ref=e125] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/files/pdf/8a/8a/8a8a1c23/gst-rate-revision.pdf
          - listitem [ref=e126]:
            - heading "About IKEA" [level=3] [ref=e127]:
              - generic: About IKEA
            - list "About IKEA This is IKEA Careers at IKEA CSR Policy Newsroom Sustainability IKEA Stores IKEA Food IKEA for Business" [ref=e128]:
              - listitem [ref=e129]:
                - link "This is IKEA" [ref=e130] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/this-is-ikea/
              - listitem [ref=e131]:
                - link "Careers at IKEA" [ref=e132] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/this-is-ikea/work-with-us/
              - listitem [ref=e133]:
                - link "CSR Policy" [ref=e134] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/this-is-ikea/csr-policy-ikea-india-private-limited-pubcc43bc70/
              - listitem [ref=e135]:
                - link "Newsroom" [ref=e136] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/newsroom/
              - listitem [ref=e137]:
                - link "Sustainability" [ref=e138] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/this-is-ikea/sustainable-everyday/
              - listitem [ref=e139]:
                - link "IKEA Stores" [ref=e140] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/stores/
              - listitem [ref=e141]:
                - link "IKEA Food" [ref=e142] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/cat/food-beverages-fb001/
              - listitem [ref=e143]:
                - link "IKEA for Business" [ref=e144] [cursor=pointer]:
                  - /url: https://www.ikea.com/in/en/ikea-business/
        - generic [ref=e145]:
          - generic [ref=e146]:
            - list [ref=e147]:
              - listitem [ref=e148]:
                - link "Follow IKEA on Facebook" [ref=e149] [cursor=pointer]:
                  - /url: https://fb.com/IKEAIndia
                  - img [ref=e150]
              - listitem [ref=e152]:
                - link "Follow IKEA on Instagram" [ref=e153] [cursor=pointer]:
                  - /url: https://www.instagram.com/ikea.india/
                  - img [ref=e154]
              - listitem [ref=e156]:
                - link "Follow IKEA on X" [ref=e157] [cursor=pointer]:
                  - /url: https://x.com/IKEAIndia
                  - img [ref=e158]
              - listitem [ref=e160]:
                - link "Follow IKEA on Youtube" [ref=e161] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UClQOVyyaLLXOx4YrpQLE01g
                  - img [ref=e162]
            - list
          - generic [ref=e164]:
            - button "Cookie settings" [ref=e166] [cursor=pointer]:
              - generic:
                - img
                - generic: Cookie settings
            - button "Change language or country/region, current language is English" [ref=e168] [cursor=pointer]:
              - generic:
                - img
                - generic:
                  - generic:
                    - generic: INEnglish
      - generic [ref=e169]:
        - paragraph [ref=e171]: © Inter IKEA Systems B.V. 2000-2026
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Privacy policy" [ref=e175] [cursor=pointer]:
              - /url: https://www.ikea.com/in/en/customer-service/privacy-policy-pub5a22cf61/
          - listitem [ref=e176]:
            - link "Cookie policy" [ref=e177] [cursor=pointer]:
              - /url: https://www.ikea.com/in/en/customer-service/cookie-policy-pubffc638db/
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  |  
  3  | test("login Flow", async ({page}) => {
  4  |      test.setTimeout(90000);
  5  |   
  6  |     await page.goto("https://www.ikea.com/in/en/");
  7  |  
  8  |     //using class locator strategy
  9  |     const cookiesBanner = page.locator(".ot-sdk-row");
  10 |  
  11 |     //using getByRole locator strategy
  12 |     if(await cookiesBanner.isVisible()) {
  13 |         await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
  14 |     }
  15 |  
  16 |     //using tag[attribute="value"] and getByText locator strategy
  17 |     await page.locator("nav[aria-label='Shopping links']").getByText("Log in").click();
  18 |  
  19 |     //using getByLabel locator strategy
  20 |     const emailInput = page.getByRole('textbox', { name: 'Email or Verified Mobile Number' });
  21 |     await emailInput.waitFor();
  22 |     await emailInput.fill("tradahenish94@gmail.com");
  23 | 
  24 |     const passwordInput = page.getByRole('textbox', { name: 'Password' });
  25 |     await passwordInput.waitFor();
  26 |     await passwordInput.fill("HeNiSh94");
  27 |  
  28 |     //using id locator strategy
  29 |     await page.locator("#submitButton").click();
  30 |  
  31 |     //Further due to bot security reasons, we cannot automate the complete process, so we will stop the test here.
  32 |  
  33 | });
  34 |  
  35 | test("search for a product", async ({page}) => {
  36 |  
  37 |     await page.goto("https://www.ikea.com/in/en/");
  38 |  
  39 |     const cookiesBanner = page.locator(".ot-sdk-row");
  40 |  
  41 |     //using getByRole locator strategy
  42 |     if(await cookiesBanner.isVisible()) {
  43 |         await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
  44 |     }
  45 |  
  46 |     const seachBar = page.locator(".search-box-container");
  47 |  
  48 |     //using getByPlaceholder locator strategy
  49 |     await seachBar.getByPlaceholder("What are you looking for?").fill("Sofa");
  50 |     
  51 |     //using getByText locator strategy
  52 |     await page.locator("ol[aria-label='Search suggestions']").getByText("cum bed").click();
  53 |  
  54 |     const productCard =  page.locator('[data-testid="plp-product-card"]');
> 55 |     await productCard.first().waitFor();
     |                               ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  56 |  
  57 |     //using nth locator strategy - add product to favourite list
  58 |     await productCard.nth(0).locator("svg").nth(2).click();
  59 |  
  60 |     //using filter to search for a specific product
  61 |     await productCard.filter({hasText: 'FRIDHULT, Sofa-bed, Skiftebo yellow' }).getByRole("checkbox").check();
  62 |     await productCard.nth(1).getByLabel("Compare").click();
  63 |  
  64 |     await page.locator('#plp-comparison-bar').getByRole('link', { name: 'Compare products' }).click();
  65 |  
  66 |     await page.waitForTimeout(5000);
  67 | });
```