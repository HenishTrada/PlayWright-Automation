# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Flight_Ticket_Booking.spec.ts >> Flight booking flow
- Location: tests/Flight_Ticket_Booking.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: /^From$/ }).nth(1)
    - locator resolved to <div class="inline-flex flex-col text-secondary w-full flex-1">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    91 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - region "Sale Section":
      - generic [ref=e3]:
        - heading "Flat 19% Off on Flights & Flat 91% Off on Hotels" [level=4] [ref=e6]
        - img "sale banner" [ref=e7]
    - generic [ref=e9]:
      - link "ixigo.com" [ref=e11] [cursor=pointer]:
        - /url: /
        - img "ixigo.com" [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - link "Offers" [ref=e15] [cursor=pointer]:
            - /url: /offers
            - img [ref=e16]
            - paragraph [ref=e18]: Offers
          - link "Customer Service" [ref=e19] [cursor=pointer]:
            - /url: /help-center
            - img [ref=e20]
            - paragraph [ref=e23]: Customer Service
        - generic [ref=e25]:
          - generic [ref=e26] [cursor=pointer]:
            - img "user-avatar" [ref=e28]
            - paragraph [ref=e29]:
              - generic [ref=e30]:
                - text: Hey
                - generic [ref=e31]: ixigoer
                - img [ref=e32]
          - generic:
            - generic:
              - link "ixigoer My Profile" [ref=e35] [cursor=pointer]:
                - /url: /account
                - listitem [ref=e36]:
                  - img [ref=e38]
                  - generic [ref=e41]:
                    - paragraph [ref=e42]: ixigoer
                    - paragraph [ref=e43]: My Profile
              - link "My Trips View & manage bookings" [ref=e45] [cursor=pointer]:
                - /url: /account/trips
                - listitem [ref=e46]:
                  - img [ref=e48]
                  - generic [ref=e52]:
                    - paragraph [ref=e53]: My Trips
                    - paragraph [ref=e54]: View & manage bookings
              - link "ixigo money Your virtual currency" [ref=e56] [cursor=pointer]:
                - /url: /finance/home
                - listitem [ref=e57]:
                  - img [ref=e59]
                  - generic [ref=e62]:
                    - paragraph [ref=e63]: ixigo money
                    - paragraph [ref=e64]: Your virtual currency
              - link "My Travellers View all saved travellers" [ref=e66] [cursor=pointer]:
                - /url: /account/travellers
                - listitem [ref=e67]:
                  - img [ref=e69]
                  - generic [ref=e73]:
                    - paragraph [ref=e74]: My Travellers
                    - paragraph [ref=e75]: View all saved travellers
              - link "Log out" [ref=e77] [cursor=pointer]:
                - /url: ""
                - listitem [ref=e78]:
                  - img [ref=e80]
                  - generic [ref=e83]:
                    - paragraph [ref=e84]: Log out
                    - paragraph
    - generic [ref=e85]:
      - generic [ref=e86]:
        - generic [ref=e89]:
          - generic [ref=e90]:
            - link "ixigo.com" [ref=e91] [cursor=pointer]:
              - /url: /
              - img "ixigo.com" [ref=e92]
            - list [ref=e94]:
              - listitem [ref=e95]:
                - link "ixigo Flights Flights" [ref=e96] [cursor=pointer]:
                  - /url: /flights
                  - img "ixigo Flights" [ref=e98]
                  - paragraph [ref=e99]: Flights
                  - paragraph [ref=e100]
              - listitem [ref=e101]:
                - link "ixigo Hotels Flat 80% Off Hotels" [ref=e102] [cursor=pointer]:
                  - /url: /hotels
                  - generic [ref=e103]:
                    - img "ixigo Hotels" [ref=e104]
                    - generic [ref=e106]: Flat 80% Off
                  - paragraph [ref=e107]: Hotels
              - listitem [ref=e108]:
                - link "ixigo Trains Trains" [ref=e109] [cursor=pointer]:
                  - /url: /trains
                  - img "ixigo Trains" [ref=e111]
                  - paragraph [ref=e112]: Trains
              - listitem [ref=e113]:
                - link "ixigo Buses Buses" [ref=e114] [cursor=pointer]:
                  - /url: /buses
                  - img "ixigo Buses" [ref=e116]
                  - paragraph [ref=e117]: Buses
            - generic [ref=e118]:
              - generic [ref=e119] [cursor=pointer]:
                - img "ixigo-more" [ref=e120]
                - paragraph [ref=e121]: More
                - img [ref=e122]
              - generic:
                - generic:
                  - listitem [ref=e125] [cursor=pointer]:
                    - img [ref=e127]
                    - paragraph [ref=e131]: Book Visa
                  - link "Group Booking" [ref=e132] [cursor=pointer]:
                    - /url: https://rocket.ixigo.com/group/index.html?p=app_search_form
                    - listitem [ref=e133]:
                      - img [ref=e135]
                      - paragraph [ref=e140]: Group Booking
                  - link "user Plan" [ref=e141] [cursor=pointer]:
                    - /url: /plan?ref=flight_web
                    - listitem [ref=e142]:
                      - img "user" [ref=e144]
                      - paragraph [ref=e146]: Plan
                  - link "credit card Credit Card" [ref=e147] [cursor=pointer]:
                    - /url: /travel-credit-card
                    - listitem [ref=e148]:
                      - img "credit card" [ref=e150]
                      - paragraph [ref=e152]: Credit Card
          - generic [ref=e153]:
            - generic [ref=e154]:
              - link "Offers" [ref=e155] [cursor=pointer]:
                - /url: /offers
                - img [ref=e156]
                - paragraph [ref=e158]: Offers
              - link "Customer Service" [ref=e159] [cursor=pointer]:
                - /url: /help-center
                - img [ref=e160]
                - paragraph [ref=e163]: Customer Service
            - generic [ref=e165]:
              - generic [ref=e166] [cursor=pointer]:
                - img "user-avatar" [ref=e168]
                - paragraph [ref=e169]:
                  - generic [ref=e170]:
                    - text: Hey
                    - generic [ref=e171]: ixigoer
                    - img [ref=e172]
              - generic:
                - generic:
                  - link "ixigoer My Profile" [ref=e175] [cursor=pointer]:
                    - /url: /account
                    - listitem [ref=e176]:
                      - img [ref=e178]
                      - generic [ref=e181]:
                        - paragraph [ref=e182]: ixigoer
                        - paragraph [ref=e183]: My Profile
                  - link "My Trips View & manage bookings" [ref=e185] [cursor=pointer]:
                    - /url: /account/trips
                    - listitem [ref=e186]:
                      - img [ref=e188]
                      - generic [ref=e192]:
                        - paragraph [ref=e193]: My Trips
                        - paragraph [ref=e194]: View & manage bookings
                  - link "ixigo money Your virtual currency" [ref=e196] [cursor=pointer]:
                    - /url: /finance/home
                    - listitem [ref=e197]:
                      - img [ref=e199]
                      - generic [ref=e202]:
                        - paragraph [ref=e203]: ixigo money
                        - paragraph [ref=e204]: Your virtual currency
                  - link "My Travellers View all saved travellers" [ref=e206] [cursor=pointer]:
                    - /url: /account/travellers
                    - listitem [ref=e207]:
                      - img [ref=e209]
                      - generic [ref=e213]:
                        - paragraph [ref=e214]: My Travellers
                        - paragraph [ref=e215]: View all saved travellers
                  - link "Log out" [ref=e217] [cursor=pointer]:
                    - /url: ""
                    - listitem [ref=e218]:
                      - img [ref=e220]
                      - generic [ref=e223]:
                        - paragraph [ref=e224]: Log out
                        - paragraph
        - generic [ref=e226]:
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link "ixigo Flights Flights" [ref=e229] [cursor=pointer]:
                - /url: /flights
                - img "ixigo Flights" [ref=e231]
                - paragraph [ref=e232]: Flights
                - paragraph [ref=e233]
            - listitem [ref=e234]:
              - link "ixigo Hotels Flat 80% Off Hotels" [ref=e235] [cursor=pointer]:
                - /url: /hotels
                - generic [ref=e236]:
                  - img "ixigo Hotels" [ref=e237]
                  - generic [ref=e239]: Flat 80% Off
                - paragraph [ref=e240]: Hotels
            - listitem [ref=e241]:
              - link "ixigo Trains Trains" [ref=e242] [cursor=pointer]:
                - /url: /trains
                - img "ixigo Trains" [ref=e244]
                - paragraph [ref=e245]: Trains
            - listitem [ref=e246]:
              - link "ixigo Buses Buses" [ref=e247] [cursor=pointer]:
                - /url: /buses
                - img "ixigo Buses" [ref=e249]
                - paragraph [ref=e250]: Buses
          - heading "Flight Booking" [level=1] [ref=e252]
        - generic [ref=e253]:
          - generic [ref=e254]:
            - tablist [ref=e256]:
              - tab "One Way" [ref=e257] [cursor=pointer]
              - tab "Round Trip" [ref=e258] [cursor=pointer]
            - list [ref=e261]:
              - listitem [ref=e262]:
                - paragraph [ref=e263]:
                  - img [ref=e264]
                  - text: 24x7 Customer Support
              - listitem [ref=e266]:
                - paragraph [ref=e267]:
                  - img [ref=e268]
                  - text: Hassle-Free Bookings
              - listitem [ref=e271]:
                - paragraph [ref=e272]:
                  - img [ref=e273]
                  - text: Best Flight Offers
              - listitem [ref=e275]:
                - paragraph [ref=e276]:
                  - img [ref=e277]
                  - text: Hassle-Free Bookings
              - listitem [ref=e280]:
                - paragraph [ref=e281]:
                  - img [ref=e282]
                  - text: 24x7 Customer Support
          - generic [ref=e284]:
            - generic [ref=e285]:
              - generic [ref=e290]:
                - paragraph [ref=e291]: From
                - paragraph [ref=e292]: AMD - Ahmedabad
              - generic [ref=e297]:
                - paragraph [ref=e298]: To
                - paragraph [ref=e299]: BOM - Mumbai
              - img [ref=e301]
            - generic [ref=e303]:
              - generic [ref=e308]:
                - paragraph [ref=e309]: Departure
                - paragraph [ref=e310]: Thu, 18 Jun
              - generic [ref=e312]:
                - generic [ref=e315]:
                  - paragraph [ref=e316]: Return
                  - paragraph [ref=e317]: Fri, 19 Jun
                - img [ref=e319] [cursor=pointer]
            - generic [ref=e325]:
              - paragraph [ref=e326]: Travellers & Class
              - paragraph [ref=e327]: 4 Travellers, Economy
            - button "Search" [ref=e328] [cursor=pointer]:
              - text: Search
              - img [ref=e329]
          - generic [ref=e332]:
            - paragraph [ref=e334]:
              - text: Special Fares
              - generic [ref=e335]: (Optional)
              - generic [ref=e336]: ":"
            - generic [ref=e337]:
              - generic [ref=e339] [cursor=pointer]: Student
              - generic [ref=e341] [cursor=pointer]: Senior Citizen
              - generic [ref=e343] [cursor=pointer]: Armed Forces
          - generic [ref=e344]:
            - generic [ref=e345]:
              - checkbox [ref=e347] [cursor=pointer]
              - paragraph [ref=e348]: Always opt for Free Cancellation
              - paragraph [ref=e350]:
                - img [ref=e351]
                - text: ₹0 cancellation fee
              - paragraph [ref=e356]:
                - img [ref=e357]
                - text: No-questions-asked instant refunds
              - paragraph [ref=e361]:
                - img "customer-service" [ref=e362]
                - text: Priority customer service
            - img [ref=e364]
      - generic [ref=e368]:
        - heading "Do More With ixigo" [level=2] [ref=e369]
        - generic [ref=e372]:
          - link "Pro Flight Tracker" [ref=e374] [cursor=pointer]:
            - /url: /flight-status
            - generic [ref=e375]:
              - generic [ref=e377]: Pro
              - img [ref=e378]
              - paragraph [ref=e380]: Flight Tracker
          - link "Free Credit Card" [ref=e383] [cursor=pointer]:
            - /url: /travel-credit-card
            - generic [ref=e384]:
              - generic [ref=e386]: Free
              - img [ref=e387]
              - paragraph [ref=e389]: Credit Card
          - link "Book Visa" [ref=e392] [cursor=pointer]:
            - /url: https://ixigo.visa2fly.com
            - generic [ref=e393]:
              - img [ref=e394]
              - paragraph [ref=e396]: Book Visa
          - link "Group Booking" [ref=e399] [cursor=pointer]:
            - /url: https://rocket.ixigo.com/group/index.html?p=app_search_form
            - generic [ref=e400]:
              - img [ref=e401]
              - paragraph [ref=e403]: Group Booking
          - link "Plan" [ref=e406] [cursor=pointer]:
            - /url: /plan?ref=flight_mweb
            - generic [ref=e407]:
              - img [ref=e408]
              - paragraph [ref=e410]: Plan
          - link "Fare Alerts" [ref=e413] [cursor=pointer]:
            - /url: /account/farealerts/
            - generic [ref=e414]:
              - img [ref=e415]
              - paragraph [ref=e417]: Fare Alerts
      - generic [ref=e418]:
        - generic [ref=e419]:
          - heading "Today's Flight Offers" [level=2] [ref=e420]
          - generic [ref=e421]:
            - generic [ref=e423] [cursor=pointer]: Flights
            - generic [ref=e425] [cursor=pointer]: Hotels
            - generic [ref=e427] [cursor=pointer]: Bank Offers
            - generic [ref=e429] [cursor=pointer]: Trains
            - link "View All" [ref=e430] [cursor=pointer]:
              - /url: /offers
              - button "View All" [ref=e431]:
                - text: View All
                - img [ref=e432]
        - generic [ref=e434]:
          - generic [ref=e435]:
            - link "Up to ₹2,000 Off on Domestic Flights with HDFC Bank Credit Card + Interest Free EMI" [ref=e437] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/flight-hdfc-dom-emi
              - img "Up to ₹2,000 Off on Domestic Flights with HDFC Bank Credit Card + Interest Free EMI" [ref=e438]
            - link "Flat 12% Off on Flights with ICICI Bank Credit Card EMI" [ref=e440] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/campaigns/iciciemi-campaign
              - img "Flat 12% Off on Flights with ICICI Bank Credit Card EMI" [ref=e441]
            - link "Get Flat 12% Off on Domestic Flights with Select SBI Visa Debit Cards" [ref=e443] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/sbi-visa-sale-flight
              - img "Get Flat 12% Off on Domestic Flights with Select SBI Visa Debit Cards" [ref=e444]
            - link "LOT Polish Airline Summer Special" [ref=e446] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/lot-polish-airline-sale
              - img "LOT Polish Airline Summer Special" [ref=e447]
            - link "Up to ₹7,500 Off on International Flights with HDFC Bank Credit Card + Interest Free EMI" [ref=e449] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/flight-hdfc-int-emi
              - img "Up to ₹7,500 Off on International Flights with HDFC Bank Credit Card + Interest Free EMI" [ref=e450]
            - link "Get Flat 10% Off on Flights with no minimum booking amount" [ref=e452] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/flyglobal
              - img "Get Flat 10% Off on Flights with no minimum booking amount" [ref=e453]
            - link "Flat 12% Off on Flights with Kotak Credit Card + Interest-Free EMI" [ref=e455] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/campaigns/kotak-card
              - img "Flat 12% Off on Flights with Kotak Credit Card + Interest-Free EMI" [ref=e456]
            - link "Up to ₹1,200 Off On Domestic Flights with OneCard Credit Card+Interest Free EMI" [ref=e458] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/onecard-D
              - img "Up to ₹1,200 Off On Domestic Flights with OneCard Credit Card+Interest Free EMI" [ref=e459]
            - link "Yes Bank CC EMI 3 Month Flights" [ref=e461] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/campaigns/yes-bank-cc-emi-3-month-flights
              - img "Yes Bank CC EMI 3 Month Flights" [ref=e462]
            - link "[DUMMY] ixigo AU Credit Card" [ref=e464] [cursor=pointer]:
              - /url: https://www.ixigo.com/payments/cbcc?utm_campaign=carousel-banner&utm_source=ixigo&utm_medium=web
              - img "[DUMMY] ixigo AU Credit Card" [ref=e465]
            - link "Jewar Airport bookings now open!" [ref=e467] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/jewar-airport
              - img "Jewar Airport bookings now open!" [ref=e468]
            - link "Get Flat 12% Off on International Flights with Select SBI Visa Debit Cards" [ref=e470] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/sbi-visa-sale-flight_int
              - img "Get Flat 12% Off on International Flights with Select SBI Visa Debit Cards" [ref=e471]
            - link "Flat 15% Off on Flights with Indian Overseas Bank Credit Cards" [ref=e473] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/campaigns/indian-overseas-bank
              - img "Flat 15% Off on Flights with Indian Overseas Bank Credit Cards" [ref=e474]
            - link "Get up to ₹5,000 Off on Domestic Flights with IDFC FIRST Bank Credit Card+Interest Free EMI" [ref=e476] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/idfc-flights-dom-emi
              - img "Get up to ₹5,000 Off on Domestic Flights with IDFC FIRST Bank Credit Card+Interest Free EMI" [ref=e477]
            - link "Flat 15% Off on Domestic Flights with J&K Bank Cards" [ref=e479] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/jk-bank-flight-dom
              - img "Flat 15% Off on Domestic Flights with J&K Bank Cards" [ref=e480]
            - link "Up to 12% Off on Domestic Flights with RBL Bank Credit Cards and Credit Card EMI" [ref=e482] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/rbl-cc-emi-dom-flight
              - img "Up to 12% Off on Domestic Flights with RBL Bank Credit Cards and Credit Card EMI" [ref=e483]
            - link "Get Flat 12% Off On Domestic Flights with BOBCARD EMI + Interest Free EMI" [ref=e485] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/bobemi
              - img "Get Flat 12% Off On Domestic Flights with BOBCARD EMI + Interest Free EMI" [ref=e486]
            - link "Get Flat 12% Off On Domestic Flights with AU Bank Credit Card + Interest Free EMI" [ref=e488] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/au-bank-emi
              - img "Get Flat 12% Off On Domestic Flights with AU Bank Credit Card + Interest Free EMI" [ref=e489]
            - link "Get Flat 10% Off on Domestic Flights via ixigo AU Credit Card" [ref=e491] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/ixigoccfly
              - img "Get Flat 10% Off on Domestic Flights via ixigo AU Credit Card" [ref=e492]
            - link "Up to 25% Off on Premium Cabin Fares with Qatar Airways" [ref=e494] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/qatar-airways
              - img "Up to 25% Off on Premium Cabin Fares with Qatar Airways" [ref=e495]
            - link "Bookings open for Mumbai to Tokyo (Haneda) with Air India" [ref=e497] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/air-india-sale-flights
              - img "Bookings open for Mumbai to Tokyo (Haneda) with Air India" [ref=e498]
            - link "Get up to ₹10,000 Off on International Flights with IDFC FIRST Bank Credit Card+Interest Free EMI" [ref=e500] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/idfc-flights-int-emi
              - img "Get up to ₹10,000 Off on International Flights with IDFC FIRST Bank Credit Card+Interest Free EMI" [ref=e501]
            - link "Get up to ₹500 cashback using Amazon Pay Wallet" [ref=e503] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/amazon-wallet
              - img "Get up to ₹500 cashback using Amazon Pay Wallet" [ref=e504]
            - link "Get up to ₹5,000 Off On International Flights with OneCard Credit Card + Interest Free EMI" [ref=e506] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/onecard-Int
              - img "Get up to ₹5,000 Off On International Flights with OneCard Credit Card + Interest Free EMI" [ref=e507]
            - link "Flat 10% Off on International Flights with RBL Bank Credit Cards and Credit Card EMI" [ref=e509] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/rbl-cc-int
              - img "Flat 10% Off on International Flights with RBL Bank Credit Cards and Credit Card EMI" [ref=e510]
            - link "Flat 10% Off on International Flights with J&K Bank Cards" [ref=e512] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/jk-bank-flight-int
              - img "Flat 10% Off on International Flights with J&K Bank Cards" [ref=e513]
            - link "Get Flat 10% Off On International Flights with BOBCARD EMI" [ref=e515] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/bobemin
              - img "Get Flat 10% Off On International Flights with BOBCARD EMI" [ref=e516]
            - link "[Dummy] Visa Rejection Protection" [ref=e518] [cursor=pointer]:
              - /url: https://www.ixigo.com/vas/visa-rejection-protection
              - img "[Dummy] Visa Rejection Protection" [ref=e519]
            - link "Get Flat 10% Off On International Flights with AU Bank Credit Card Interest Free EMI" [ref=e521] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/auweb
              - img "Get Flat 10% Off On International Flights with AU Bank Credit Card Interest Free EMI" [ref=e522]
            - link "Get Flat 10% Off on International Flights via ixigo AU Credit Card" [ref=e524] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/ixigoccfly
              - img "Get Flat 10% Off on International Flights via ixigo AU Credit Card" [ref=e525]
            - link "Get a chance to win a brand new iPhone 17." [ref=e527] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/iphone17
              - img "Get a chance to win a brand new iPhone 17." [ref=e528]
            - link "ixigo Assured" [ref=e530] [cursor=pointer]:
              - /url: https://www.ixigo.com/ixigo-assured
              - img "ixigo Assured" [ref=e531]
            - link "[DUMMY] Assured Flex Flight" [ref=e533] [cursor=pointer]:
              - /url: https://www.ixigo.com/assured-flex-flight
              - img "[DUMMY] Assured Flex Flight" [ref=e534]
            - link "New Domestic Flight Routes" [ref=e536] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/domestic-routes
              - img "New Domestic Flight Routes" [ref=e537]
            - link "Save Upto ₹6000 on Flights" [ref=e539] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/save-upto-6000-on-flight
              - img "Save Upto ₹6000 on Flights" [ref=e540]
            - link "Get Flat 12% Off On Your 1st Flight Booking" [ref=e542] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/new12
              - img "Get Flat 12% Off On Your 1st Flight Booking" [ref=e543]
            - link "New/Resumed International Flight Routes" [ref=e545] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/int-routes
              - img "New/Resumed International Flight Routes" [ref=e546]
          - button [ref=e547] [cursor=pointer]:
            - img [ref=e549]
      - generic [ref=e551]:
        - heading "Why Book With ixigo?" [level=2] [ref=e552]
        - generic [ref=e553]:
          - generic [ref=e554]:
            - img "24x7 customer support" [ref=e556]
            - img "Lock Now, Book Later with Price Lock" [ref=e558]
            - img "Instant & full refunds with Assured" [ref=e560]
            - img "Travel Stress-Free with Travel Insurance" [ref=e562]
            - img "Save up to 40% with intelligent fare alerts" [ref=e564]
            - img "Track flight delays, boarding gate & baggage belt" [ref=e566]
          - button [ref=e567] [cursor=pointer]:
            - img [ref=e569]
          - button [ref=e571] [cursor=pointer]:
            - img [ref=e573]
      - generic [ref=e575]:
        - heading "Popular Flight Routes" [level=2] [ref=e576]
        - generic [ref=e577]:
          - generic [ref=e579]:
            - img "Mumbai Flights" [ref=e581]
            - generic [ref=e582]:
              - paragraph [ref=e583]: Mumbai Flights
              - generic [ref=e584]:
                - paragraph [ref=e585]: "To:"
                - generic [ref=e586]:
                  - paragraph [ref=e588]:
                    - link "Goa" [ref=e589] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/mumbai-goa-bom-goi
                  - generic [ref=e590]:
                    - paragraph [ref=e591]: •
                    - paragraph [ref=e592]:
                      - link "Delhi" [ref=e593] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/mumbai-new-delhi-bom-del
                  - generic [ref=e594]:
                    - paragraph [ref=e595]: •
                    - paragraph [ref=e596]:
                      - link "Bangalore" [ref=e597] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/mumbai-bengaluru-bom-blr
                  - generic [ref=e598]:
                    - paragraph [ref=e599]: •
                    - paragraph [ref=e600]:
                      - link "Ahmedabad" [ref=e601] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/mumbai-ahmedabad-bom-amd
          - generic [ref=e603]:
            - img "Delhi Flights" [ref=e605]
            - generic [ref=e606]:
              - paragraph [ref=e607]: Delhi Flights
              - generic [ref=e608]:
                - paragraph [ref=e609]: "To:"
                - generic [ref=e610]:
                  - paragraph [ref=e612]:
                    - link "Mumbai" [ref=e613] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/new-delhi-mumbai-del-bom
                  - generic [ref=e614]:
                    - paragraph [ref=e615]: •
                    - paragraph [ref=e616]:
                      - link "Goa" [ref=e617] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/new-delhi-goa-del-goi
                  - generic [ref=e618]:
                    - paragraph [ref=e619]: •
                    - paragraph [ref=e620]:
                      - link "Bangalore" [ref=e621] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/new-delhi-bengaluru-del-blr
                  - generic [ref=e622]:
                    - paragraph [ref=e623]: •
                    - paragraph [ref=e624]:
                      - link "Pune" [ref=e625] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/new-delhi-pune-del-pnq
          - generic [ref=e627]:
            - img "Kolkata Flights" [ref=e629]
            - generic [ref=e630]:
              - paragraph [ref=e631]: Kolkata Flights
              - generic [ref=e632]:
                - paragraph [ref=e633]: "To:"
                - generic [ref=e634]:
                  - paragraph [ref=e636]:
                    - link "Mumbai" [ref=e637] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/kolkata-mumbai-ccu-bom
                  - generic [ref=e638]:
                    - paragraph [ref=e639]: •
                    - paragraph [ref=e640]:
                      - link "Delhi" [ref=e641] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/kolkata-new-delhi-ccu-del
                  - generic [ref=e642]:
                    - paragraph [ref=e643]: •
                    - paragraph [ref=e644]:
                      - link "Bangalore" [ref=e645] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/kolkata-bengaluru-ccu-blr
                  - generic [ref=e646]:
                    - paragraph [ref=e647]: •
                    - paragraph [ref=e648]:
                      - link "Bagdogra" [ref=e649] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/kolkata-bagdogra-ccu-ixb
          - generic [ref=e651]:
            - img "Chennai Flights" [ref=e653]
            - generic [ref=e654]:
              - paragraph [ref=e655]: Chennai Flights
              - generic [ref=e656]:
                - paragraph [ref=e657]: "To:"
                - generic [ref=e658]:
                  - paragraph [ref=e660]:
                    - link "Mumbai" [ref=e661] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/chennai-mumbai-maa-bom
                  - generic [ref=e662]:
                    - paragraph [ref=e663]: •
                    - paragraph [ref=e664]:
                      - link "Delhi" [ref=e665] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/chennai-new-delhi-maa-del
                  - generic [ref=e666]:
                    - paragraph [ref=e667]: •
                    - paragraph [ref=e668]:
                      - link "Madurai" [ref=e669] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/chennai-madurai-maa-ixm
                  - generic [ref=e670]:
                    - paragraph [ref=e671]: •
                    - paragraph [ref=e672]:
                      - link "Coimbatore" [ref=e673] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/chennai-coimbatore-maa-cjb
          - generic [ref=e675]:
            - img "Hyderabad Flights" [ref=e677]
            - generic [ref=e678]:
              - paragraph [ref=e679]: Hyderabad Flights
              - generic [ref=e680]:
                - paragraph [ref=e681]: "To:"
                - generic [ref=e682]:
                  - paragraph [ref=e684]:
                    - link "Mumbai" [ref=e685] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/hyderabad-mumbai-hyd-bom
                  - generic [ref=e686]:
                    - paragraph [ref=e687]: •
                    - paragraph [ref=e688]:
                      - link "Goa" [ref=e689] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/hyderabad-goa-hyd-goi
                  - generic [ref=e690]:
                    - paragraph [ref=e691]: •
                    - paragraph [ref=e692]:
                      - link "Bangalore" [ref=e693] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/hyderabad-bengaluru-hyd-blr
                  - generic [ref=e694]:
                    - paragraph [ref=e695]: •
                    - paragraph [ref=e696]:
                      - link "Delhi" [ref=e697] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/hyderabad-new-delhi-hyd-del
          - generic [ref=e699]:
            - img "Ahmedabad Flights" [ref=e701]
            - generic [ref=e702]:
              - paragraph [ref=e703]: Ahmedabad Flights
              - generic [ref=e704]:
                - paragraph [ref=e705]: "To:"
                - generic [ref=e706]:
                  - paragraph [ref=e708]:
                    - link "Mumbai" [ref=e709] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/ahmedabad-mumbai-amd-bom
                  - generic [ref=e710]:
                    - paragraph [ref=e711]: •
                    - paragraph [ref=e712]:
                      - link "Delhi" [ref=e713] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/ahmedabad-new-delhi-amd-del
                  - generic [ref=e714]:
                    - paragraph [ref=e715]: •
                    - paragraph [ref=e716]:
                      - link "Bangalore" [ref=e717] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/ahmedabad-bengaluru-amd-blr
                  - generic [ref=e718]:
                    - paragraph [ref=e719]: •
                    - paragraph [ref=e720]:
                      - link "Goa" [ref=e721] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/ahmedabad-goa-amd-goi
          - generic [ref=e723]:
            - img "Bangalore Flights" [ref=e725]
            - generic [ref=e726]:
              - paragraph [ref=e727]: Bangalore Flights
              - generic [ref=e728]:
                - paragraph [ref=e729]: "To:"
                - generic [ref=e730]:
                  - paragraph [ref=e732]:
                    - link "Mumbai" [ref=e733] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/bengaluru-mumbai-blr-bom
                  - generic [ref=e734]:
                    - paragraph [ref=e735]: •
                    - paragraph [ref=e736]:
                      - link "Delhi" [ref=e737] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/bengaluru-new-delhi-blr-del
                  - generic [ref=e738]:
                    - paragraph [ref=e739]: •
                    - paragraph [ref=e740]:
                      - link "Goa" [ref=e741] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/bengaluru-goa-blr-goi
                  - generic [ref=e742]:
                    - paragraph [ref=e743]: •
                    - paragraph [ref=e744]:
                      - link "Hyderabad" [ref=e745] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/bengaluru-hyderabad-blr-hyd
          - generic [ref=e747]:
            - img "Pune Flights" [ref=e749]
            - generic [ref=e750]:
              - paragraph [ref=e751]: Pune Flights
              - generic [ref=e752]:
                - paragraph [ref=e753]: "To:"
                - generic [ref=e754]:
                  - paragraph [ref=e756]:
                    - link "Goa" [ref=e757] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/pune-goa-pnq-goi
                  - generic [ref=e758]:
                    - paragraph [ref=e759]: •
                    - paragraph [ref=e760]:
                      - link "Delhi" [ref=e761] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/pune-new-delhi-pnq-del
                  - generic [ref=e762]:
                    - paragraph [ref=e763]: •
                    - paragraph [ref=e764]:
                      - link "Bangalore" [ref=e765] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/pune-bengaluru-pnq-blr
                  - generic [ref=e766]:
                    - paragraph [ref=e767]: •
                    - paragraph [ref=e768]:
                      - link "Nagpur" [ref=e769] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/pune-nagpur-pnq-nag
          - generic [ref=e771]:
            - img "Goa Flights" [ref=e773]
            - generic [ref=e774]:
              - paragraph [ref=e775]: Goa Flights
              - generic [ref=e776]:
                - paragraph [ref=e777]: "To:"
                - generic [ref=e778]:
                  - paragraph [ref=e780]:
                    - link "Mumbai" [ref=e781] [cursor=pointer]:
                      - /url: https://www.ixigo.com/cheap-flights/goa-mumbai-goi-bom
                  - generic [ref=e782]:
                    - paragraph [ref=e783]: •
                    - paragraph [ref=e784]:
                      - link "Delhi" [ref=e785] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/goa-new-delhi-goi-del
                  - generic [ref=e786]:
                    - paragraph [ref=e787]: •
                    - paragraph [ref=e788]:
                      - link "Bangalore" [ref=e789] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/goa-bengaluru-goi-blr
                  - generic [ref=e790]:
                    - paragraph [ref=e791]: •
                    - paragraph [ref=e792]:
                      - link "Hyderabad" [ref=e793] [cursor=pointer]:
                        - /url: https://www.ixigo.com/cheap-flights/goa-hyderabad-goi-hyd
      - generic [ref=e794]:
        - heading "Popular Domestic Airlines" [level=2] [ref=e795]
        - generic [ref=e796]:
          - link "6E IndiGo" [ref=e797] [cursor=pointer]:
            - /url: /airlines/indigo-6e
            - img "6E" [ref=e799]
            - paragraph [ref=e800]: IndiGo
          - link "AI Air India" [ref=e801] [cursor=pointer]:
            - /url: /airlines/air_india-ai
            - img "AI" [ref=e803]
            - paragraph [ref=e804]: Air India
          - link "IX Air India Express" [ref=e805] [cursor=pointer]:
            - /url: /airlines/airindia_express-ix
            - img "IX" [ref=e807]
            - paragraph [ref=e808]: Air India Express
          - link "QP Akasa Air" [ref=e809] [cursor=pointer]:
            - /url: /airlines/akasa_air-qp
            - img "QP" [ref=e811]
            - paragraph [ref=e812]: Akasa Air
          - link "9I Alliance Air" [ref=e813] [cursor=pointer]:
            - /url: /airlines/alliance_air-9i
            - img "9I" [ref=e815]
            - paragraph [ref=e816]: Alliance Air
          - link "SG SpiceJet" [ref=e817] [cursor=pointer]:
            - /url: /airlines/spicejet-sg
            - img "SG" [ref=e819]
            - paragraph [ref=e820]: SpiceJet
      - generic [ref=e823]:
        - generic [ref=e824]:
          - heading "Flight Ticket Booking with ixigo" [level=2] [ref=e825]:
            - strong [ref=e826]: Flight Ticket Booking with ixigo
          - paragraph [ref=e827]:
            - text: Book your flight ticket with ixigo and compare fares across multiple airlines in seconds. Whether you're planning a domestic trip or international travel, ixigo helps you find cheap flight tickets, track price drops with fare alerts and complete your online flight booking quickly and securely. With exclusive partner offers and great discounts, explore the latest
            - link "flight booking offers" [ref=e828] [cursor=pointer]:
              - /url: https://www.ixigo.com/offers/tag/flight-offers/
            - text: and make your journey more affordable.
        - generic [ref=e829]:
          - heading "How to Book Flight Tickets on ixigo" [level=2] [ref=e830]:
            - strong [ref=e831]: How to Book Flight Tickets on ixigo
          - generic [ref=e832]:
            - paragraph [ref=e833]: With ixigo, booking flight tickets is quick and easy. Just follow the steps mentioned below for a seamless experience.
            - list [ref=e834]:
              - listitem [ref=e835]: Visit the ixigo website or open the app. Enter departure city or airport code, destination, travel dates and number of passengers.
              - listitem [ref=e836]: Compare flight ticket prices across multiple airlines based on price, duration or stopovers.
              - listitem [ref=e837]: Apply filters like preferred airline, departure time, number of stops or lowest flight ticket price.
              - listitem [ref=e838]: Select the most suitable flight for your journey.
              - listitem [ref=e839]: Add traveller details accurately.
              - listitem [ref=e840]: Apply offers & promo codes for additional savings.
              - listitem [ref=e841]: Complete payment securely using cards, UPI, net banking or wallets.
        - generic [ref=e842]:
          - heading "Compare Flight Prices Across Airlines" [level=2] [ref=e843]:
            - strong [ref=e844]: Compare Flight Prices Across Airlines
          - generic [ref=e845]:
            - paragraph [ref=e846]: ixigo makes it easy to compare flight prices across airlines in real time. Instead of checking multiple airline websites individually, you can view all available options in one place.
            - list [ref=e847]:
              - listitem [ref=e848]: Compare fares from domestic and international airlines instantly.
              - listitem [ref=e849]: Filter results by price, duration, airline or stopovers.
              - listitem [ref=e850]: View transparent pricing with no hidden charges.
              - listitem [ref=e851]: Access fare alerts to track price drops.
              - listitem [ref=e852]: Choose the best cheap flight booking option quickly.
            - paragraph [ref=e853]: This helps travellers make smarter decisions and secure the lowest available airfare.
        - generic [ref=e854]:
          - heading "Tips to Get Cheap Flight Tickets" [level=2] [ref=e855]:
            - strong [ref=e856]: Tips to Get Cheap Flight Tickets
          - generic [ref=e857]:
            - paragraph [ref=e858]: "Follow these expert tips to find cheap flight tickets easily:"
            - list [ref=e859]:
              - listitem [ref=e860]:
                - strong [ref=e861]: "Book early:"
                - text: Book domestic tickets 2–3 weeks in advance and
                - link "international flights" [ref=e862] [cursor=pointer]:
                  - /url: https://www.ixigo.com/international-flights
                - text: 7–8 weeks early.
              - listitem [ref=e863]:
                - strong [ref=e864]: "Use fare alerts:"
                - text: Enable ixigo fare alerts to monitor changing flight ticket prices. On ixigo, you can save up to 40% on air ticket booking online with our fare alert feature.
              - listitem [ref=e865]:
                - strong [ref=e866]: "Travel mid-week:"
                - text: Flights on Tuesdays and Wednesdays are often cheaper than weekends.
              - listitem [ref=e867]:
                - strong [ref=e868]: "Consider stopovers:"
                - text: Connecting flights can cost less than direct flights.
              - listitem [ref=e869]:
                - strong [ref=e870]: "Avoid peak days:"
                - text: Prices increase during weekends and holidays.
              - listitem [ref=e871]:
                - strong [ref=e872]: "Use Special Fares:"
                - text: Discounts for students, senior citizens and armed forces.
              - listitem [ref=e873]:
                - strong [ref=e874]: "Apply bank and partner offers:"
                - text: Use promo codes and bank offers for extra savings on online flight booking.
              - listitem [ref=e875]:
                - strong [ref=e876]: "Compare before booking:"
                - text: Always compare airlines to get the best deal.
        - generic [ref=e877]:
          - heading "Domestic & International Flight Booking on ixigo" [level=2] [ref=e878]:
            - strong [ref=e879]: Domestic & International Flight Booking on ixigo
          - generic [ref=e880]:
            - paragraph [ref=e881]:
              - text: ixigo offers seamless domestic and
              - link "international flight booking" [ref=e882] [cursor=pointer]:
                - /url: https://www.ixigo.com/international-flights
              - text: with access to hundreds of airlines worldwide.
            - paragraph [ref=e883]:
              - text: For domestic travel, compare fares across top airlines like
              - link "IndiGo" [ref=e884] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/indigo-6e
              - text: ","
              - link "Air India" [ref=e885] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/air_india-ai
              - text: ","
              - link "Akasa Air" [ref=e886] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/akasa_air-qp
              - text: ","
              - link "SpiceJet" [ref=e887] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/spicejet-sg
              - text: and
              - link "Air India Express" [ref=e888] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/airindia_express-ix
              - text: .
            - paragraph [ref=e889]: For international flight booking, ixigo helps you find affordable options across major global destinations with competitive pricing and easy comparisons.
            - paragraph [ref=e890]:
              - strong [ref=e891]: "With ixigo, travellers can:"
            - list [ref=e892]:
              - listitem [ref=e893]: Compare multiple airline fares instantly
              - listitem [ref=e894]:
                - text: Access exclusive
                - link "flight deals and cashback offers" [ref=e895] [cursor=pointer]:
                  - /url: https://www.ixigo.com/offers/tag/flight-offers/
              - listitem [ref=e896]: Track live flight status
              - listitem [ref=e897]: Enable automatic web check-in
              - listitem [ref=e898]: Manage bookings easily
              - listitem [ref=e899]: Get quick refunds and 24×7 support
      - generic [ref=e900]:
        - heading "Frequently Asked Questions" [level=2] [ref=e901]
        - generic [ref=e902]:
          - generic [ref=e903]:
            - generic [ref=e904] [cursor=pointer]:
              - heading "Why is flight ticket booking cheaper on ixigo?" [level=3] [ref=e906]
              - img [ref=e908]
            - generic [ref=e914]: ixigo compares fares across multiple airline websites to help travellers find the lowest available flight ticket prices. Exclusive bank offers, partner discounts and fare alerts make ixigo one of the best platforms for cheap flight ticket booking.
          - generic [ref=e915]:
            - generic [ref=e916] [cursor=pointer]:
              - heading "How can I find cheap flight tickets on ixigo?" [level=3] [ref=e918]
              - img [ref=e920]
            - generic [ref=e926]:
              - text: "To find cheap flight tickets:"
              - list [ref=e927]:
                - listitem [ref=e928]: Book tickets 2–3 weeks in advance
                - listitem [ref=e929]: Enable fare alerts
                - listitem [ref=e930]: Travel mid-week instead of weekends
                - listitem [ref=e931]: Use promo codes and bank offers
                - listitem [ref=e932]: Compare airlines before booking
          - generic [ref=e933]:
            - generic [ref=e934] [cursor=pointer]:
              - heading "What are the benefits of online flight booking with ixigo?" [level=3] [ref=e936]
              - img [ref=e938]
            - generic [ref=e944]:
              - text: "Booking flights on ixigo offers:"
              - list [ref=e945]:
                - listitem [ref=e946]: Lowest airfare comparison
                - listitem [ref=e947]: Exclusive partner discounts
                - listitem [ref=e948]: Flexible date options
                - listitem [ref=e949]: Price lock feature
                - listitem [ref=e950]: Automatic web check-in
                - listitem [ref=e951]: Travel insurance add-ons
                - listitem [ref=e952]: LIVE flight status tracking
                - listitem [ref=e953]: Quick refunds
                - listitem [ref=e954]: 24×7 customer support
          - generic [ref=e955]:
            - generic [ref=e956] [cursor=pointer]:
              - heading "Can I modify or cancel my booking?" [level=3] [ref=e958]
              - img [ref=e960]
            - generic [ref=e966]: Yes. With Assured, you get free cancellation on eligible bookings. With Assured Flex, you can cancel or reschedule once without extra airline change fees (including route and date changes).
          - generic [ref=e967]:
            - generic [ref=e968] [cursor=pointer]:
              - heading "What is Assured and Assured Flex?" [level=3] [ref=e970]
              - img [ref=e972]
            - generic [ref=e978]: Assured provides free cancellation protection on selected bookings. Assured Flex allows one-time free rescheduling or cancellation, including airline, route or travel date changes. These options offer greater flexibility if travel plans change.
        - button "View More" [ref=e980] [cursor=pointer]
    - generic [ref=e981]:
      - generic [ref=e982]:
        - generic [ref=e983]:
          - generic [ref=e984]:
            - tab "Popular Flight Routes" [ref=e985] [cursor=pointer]
            - tab "Top Flight Routes" [ref=e986] [cursor=pointer]
            - tab "Trending Flight Routes" [ref=e987] [cursor=pointer]
            - tab "Airlines" [ref=e988] [cursor=pointer]
            - tab "Popular Airlines Routes" [ref=e989] [cursor=pointer]
          - tabpanel [ref=e990]:
            - link "Bengaluru to Dubai Flights" [ref=e991] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/bengaluru-dubai-blr-dxb
              - paragraph [ref=e992]: Bengaluru to Dubai Flights
            - link "Pune to Kolkata Flights" [ref=e993] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/pune-kolkata-pnq-ccu
              - paragraph [ref=e994]: Pune to Kolkata Flights
            - link "Mumbai to Guwahati Flights" [ref=e995] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/mumbai-guwahati-bom-gau
              - paragraph [ref=e996]: Mumbai to Guwahati Flights
            - link "Guwahati to Kolkata Flights" [ref=e997] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/guwahati-kolkata-gau-ccu
              - paragraph [ref=e998]: Guwahati to Kolkata Flights
            - link "Mumbai to Bhubaneswar Flights" [ref=e999] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/mumbai-bhubaneswar-bom-bbi
              - paragraph [ref=e1000]: Mumbai to Bhubaneswar Flights
            - link "New Delhi to Darbhanga Flights" [ref=e1001] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/new-delhi-darbhanga-del-dbr
              - paragraph [ref=e1002]: New Delhi to Darbhanga Flights
            - link "Navi Mumbai to New Delhi Flights" [ref=e1003] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/navi-mumbai-new-delhi-nmi-del
              - paragraph [ref=e1004]: Navi Mumbai to New Delhi Flights
            - link "Lucknow to New Delhi Flights" [ref=e1005] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/lucknow-new-delhi-lko-del
              - paragraph [ref=e1006]: Lucknow to New Delhi Flights
            - link "Kolkata to Hyderabad Flights" [ref=e1007] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/kolkata-hyderabad-ccu-hyd
              - paragraph [ref=e1008]: Kolkata to Hyderabad Flights
            - link "Mumbai to Patna Flights" [ref=e1009] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/mumbai-patna-bom-pat
              - paragraph [ref=e1010]: Mumbai to Patna Flights
            - link "Guwahati to Bengaluru Flights" [ref=e1011] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/guwahati-bengaluru-gau-blr
              - paragraph [ref=e1012]: Guwahati to Bengaluru Flights
            - link "Kochi to New Delhi Flights" [ref=e1013] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/kochi-new-delhi-cok-del
              - paragraph [ref=e1014]: Kochi to New Delhi Flights
            - link "Raipur to New Delhi Flights" [ref=e1015] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/raipur-new-delhi-rpr-del
              - paragraph [ref=e1016]: Raipur to New Delhi Flights
            - link "Mumbai to Kochi Flights" [ref=e1017] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/mumbai-kochi-bom-cok
              - paragraph [ref=e1018]: Mumbai to Kochi Flights
            - link "Kolkata to Port Blair Flights" [ref=e1019] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/kolkata-port-blair-ccu-ixz
              - paragraph [ref=e1020]: Kolkata to Port Blair Flights
            - link "Patna to Bengaluru Flights" [ref=e1021] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/patna-bengaluru-pat-blr
              - paragraph [ref=e1022]: Patna to Bengaluru Flights
            - link "Lucknow to Bengaluru Flights" [ref=e1023] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/lucknow-bengaluru-lko-blr
              - paragraph [ref=e1024]: Lucknow to Bengaluru Flights
            - link "Mumbai to Prayagraj Flights" [ref=e1025] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/mumbai-prayagraj-bom-ixd
              - paragraph [ref=e1026]: Mumbai to Prayagraj Flights
            - link "Kochi to Dubai Flights" [ref=e1027] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/kochi-dubai-cok-dxb
              - paragraph [ref=e1028]: Kochi to Dubai Flights
            - link "Dubai to Patna Flights" [ref=e1029] [cursor=pointer]:
              - /url: https://www.ixigo.com/cheap-flights/dubai-patna-dxb-pat
              - paragraph [ref=e1030]: Dubai to Patna Flights
        - generic [ref=e1032]:
          - paragraph [ref=e1033]: Important Links
          - generic [ref=e1034]:
            - paragraph [ref=e1035]:
              - link "Indigo Flight Status" [ref=e1036] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/indigo-6e/flight-status
            - paragraph [ref=e1037]:
              - link "Air India Flight Status" [ref=e1038] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/air_india-ai/flight-status
            - paragraph [ref=e1039]:
              - link "Spicejet Flight Status" [ref=e1040] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/spicejet-sg/flight-status
            - paragraph [ref=e1041]:
              - link "Flight Status" [ref=e1042] [cursor=pointer]:
                - /url: https://www.ixigo.com/flight-status
            - paragraph [ref=e1043]:
              - link "Student Flight Booking" [ref=e1044] [cursor=pointer]:
                - /url: https://www.ixigo.com/flights/student-flight-booking
            - paragraph [ref=e1045]:
              - link "Senior Citizen Flight Booking" [ref=e1046] [cursor=pointer]:
                - /url: https://www.ixigo.com/flights/senior-citizen-flight-booking
            - paragraph [ref=e1047]:
              - link "Armed Forces Flight Booking" [ref=e1048] [cursor=pointer]:
                - /url: https://www.ixigo.com/flights/armed-forces-flight-booking
            - paragraph [ref=e1049]:
              - link "Air India Express Flight Status" [ref=e1050] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/airindia_express-ix/flight-status
            - paragraph [ref=e1051]:
              - link "International Flights" [ref=e1052] [cursor=pointer]:
                - /url: https://www.ixigo.com/international-flights
            - paragraph [ref=e1053]:
              - link "Flights Offers" [ref=e1054] [cursor=pointer]:
                - /url: https://www.ixigo.com/offers/tag/flight-offers/
            - paragraph [ref=e1055]:
              - link "Web Check-in Online" [ref=e1056] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/web-checkin
            - paragraph [ref=e1057]:
              - link "Air India Express Web Check-in" [ref=e1058] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/airindia_express-ai/web-checkin
            - paragraph [ref=e1059]:
              - link "Air India Web Check-in" [ref=e1060] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/air_india-ai/web-checkin
            - paragraph [ref=e1061]:
              - link "SpiceJet Web Check-in" [ref=e1062] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/spicejet-sg/web-checkin
            - paragraph [ref=e1063]:
              - link "Akasa Air Web Check-in" [ref=e1064] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/akasa_air-qp/web-checkin
            - paragraph [ref=e1065]:
              - link "Responsible Disclosure" [ref=e1066] [cursor=pointer]:
                - /url: https://www.ixigo.com/responsible-disclosure-policy
            - paragraph [ref=e1067]:
              - link "Indigo Web Check-in" [ref=e1068] [cursor=pointer]:
                - /url: https://www.ixigo.com/airlines/indigo-6e/web-checkin
      - generic [ref=e1070]:
        - generic [ref=e1071]:
          - generic [ref=e1072]:
            - paragraph [ref=e1073]:
              - link "Advertise with us" [ref=e1074] [cursor=pointer]:
                - /url: https://survey.ixigo.com/ads
            - paragraph [ref=e1075]:
              - link "About Us" [ref=e1076] [cursor=pointer]:
                - /url: /about
            - paragraph [ref=e1077]:
              - link "Investor Relations" [ref=e1078] [cursor=pointer]:
                - /url: /about/investor-relations
            - paragraph [ref=e1079]:
              - link "CSR" [ref=e1080] [cursor=pointer]:
                - /url: /about/csr
          - generic [ref=e1081]:
            - paragraph [ref=e1082]:
              - link "Privacy" [ref=e1083] [cursor=pointer]:
                - /url: /about/more-info/privacy
            - paragraph [ref=e1084]:
              - link "Terms of Use" [ref=e1085] [cursor=pointer]:
                - /url: /about/more-info/terms-of-use
            - paragraph [ref=e1086]:
              - link "Careers" [ref=e1087] [cursor=pointer]:
                - /url: /about/careers
            - paragraph [ref=e1088]:
              - link "Customer Service" [ref=e1089] [cursor=pointer]:
                - /url: /help-center
          - paragraph [ref=e1090]: © 2026 Le Travenues Technology Ltd. India. All brands are trademarks of their respective owners.
        - generic [ref=e1091]:
          - link "facebook" [ref=e1092] [cursor=pointer]:
            - /url: https://www.facebook.com/ixigo
            - img "facebook" [ref=e1093]
          - link "twitter" [ref=e1094] [cursor=pointer]:
            - /url: https://www.twitter.com/ixigo
            - img "twitter" [ref=e1095]
          - link "instgram" [ref=e1096] [cursor=pointer]:
            - /url: https://www.instagram.com/ixigo
            - img "instgram" [ref=e1097]
          - link "linkedin" [ref=e1098] [cursor=pointer]:
            - /url: https://in.linkedin.com/company/ixigo
            - img "linkedin" [ref=e1099]
          - link "youtube" [ref=e1100] [cursor=pointer]:
            - /url: https://www.youtube.com/user/ixigorocks
            - img "youtube" [ref=e1101]
  - alert [ref=e1102]
```

# Test source

```ts
  1   | import { Locator, Page, expect } from "@playwright/test";
  2   | 
  3   | export class AbhiBusFlightsPage {
  4   |     page: Page;
  5   |     flightsLink: Locator;
  6   |     closeButton: Locator;
  7   |     fromTrigger: Locator;
  8   |     toTrigger: Locator;
  9   |     fromInput: Locator;
  10  |     toInput: Locator;
  11  |     departureDate: Locator;
  12  |     returnDate: Locator;
  13  |     travellersTrigger: Locator;
  14  |     searchButton: Locator;
  15  | 
  16  |     loginButton: Locator;
  17  |     mobileNumberField: Locator;
  18  |     continueButton: Locator;
  19  |     verifyHeading: Locator;
  20  | 
  21  |     constructor(page: Page) {
  22  |         this.page = page;
  23  |         this.flightsLink = page.getByRole('link', { name: 'Flights' });
  24  |         this.closeButton = page.locator(".closeButton");
  25  |         this.fromTrigger = page.locator('div').filter({ hasText: /^From$/ }).nth(1);
  26  |         this.toTrigger = page.locator('div').filter({ hasText: /^To$/ }).nth(1);
  27  |         this.fromInput = page.locator(`//div/div[2]/input`).nth(1);
  28  |         this.toInput = page.locator(`//div/div[2]/input`).nth(1);
  29  |         this.departureDate = page.getByTestId('departureDate');
  30  |         this.returnDate = page.locator('div').filter({ hasText: /^Return$/ }).nth(2);
  31  |         this.travellersTrigger = page.getByTestId('pax');
  32  |         this.searchButton = page.getByRole('button', { name: 'Search' });
  33  | 
  34  |         this.loginButton = page.getByRole('button', { name: 'Log in/Sign up' }).first();
  35  |         this.mobileNumberField = page.getByRole('textbox', { name: 'Enter Mobile Number' });
  36  |         this.continueButton = page.getByRole('button', { name: 'Continue' });
  37  |         this.verifyHeading = page.getByRole('heading', { name: 'Verify Your Mobile Number', level: 5 });
  38  |     }
  39  | 
  40  |     async closeOfferbanner() {
  41  |         const isPresent = await this.closeButton
  42  |             .waitFor({ state: 'visible', timeout: 3000 })
  43  |             .then(() => true)
  44  |             .catch(() => false);
  45  | 
  46  |         if (isPresent) {
  47  |             await this.closeButton.click();
  48  |         }
  49  |     }
  50  | 
  51  |     async goToFlightsTab(): Promise<void> {
  52  |         await this.flightsLink.click();
  53  |         await this.closeOfferbanner();
  54  |         // await expect(this.fromTrigger).toBeVisible({ timeout: 30000 });
  55  |     }
  56  | 
  57  |     async selectOrigin(cityName: string, airportName: string): Promise<void> {
> 58  |         await this.fromTrigger.click();
      |                                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  59  |         await this.fromTrigger.pressSequentially(cityName, { delay: 200, timeout: 4000 });
  60  |         await this.page.getByText(airportName, { exact: true }).click();
  61  |     }
  62  | 
  63  |     async selectDestination(cityName: string, locationName: string): Promise<void> {
  64  |         // await this.toTrigger.click();
  65  |         await this.toTrigger.pressSequentially(cityName, { delay: 200, timeout: 4000 });
  66  |         await this.page.getByText(locationName, { exact: true }).click();
  67  |     }
  68  | 
  69  |     async selectDepartureDate(ariaLabel: string): Promise<void> {
  70  |         await this.departureDate.click();
  71  |         await this.page.locator(`abbr[aria-label='${ariaLabel}']`).click();
  72  |     }
  73  | 
  74  |     async selectReturnDate(ariaLabel: string): Promise<void> {
  75  |         await this.returnDate.click();
  76  |         await this.page.locator(`abbr[aria-label='${ariaLabel}']`).click();
  77  |     }
  78  | 
  79  |     async setTravellers(adultsCount: number): Promise<void> {
  80  |         await this.travellersTrigger.click();
  81  |         await this.page.locator(`[data-testid="${adultsCount}"]`).first().click();
  82  |     }
  83  | 
  84  |     async pressSearchButton(): Promise<void> {
  85  |         await this.searchButton.click();
  86  |     }
  87  | 
  88  |     async loginFunc() {
  89  |         await expect(this.loginButton).toBeVisible({ timeout: 4000 });
  90  |         await this.loginButton.click();
  91  | 
  92  |         await this.mobileNumberField.click();
  93  |         await this.mobileNumberField.pressSequentially("8200079192");
  94  |         await this.continueButton.click();
  95  | 
  96  |         await expect(this.verifyHeading).toBeVisible({ timeout: 4000 });
  97  | 
  98  |     }
  99  | 
  100 |     async fillOtp(page: Page, otp: string): Promise<void> {
  101 |         const digits = otp.split('');
  102 |         const inputs = page.locator('#otp [type="number"]');
  103 | 
  104 |         await expect(inputs).toHaveCount(digits.length);
  105 | 
  106 |         for (let i = 0; i < digits.length; i++) {
  107 |             await inputs.nth(i).fill(digits[i]);
  108 |         }
  109 |     }
  110 | }
```