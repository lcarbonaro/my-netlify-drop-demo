Steps for simplest Netlify set-up:
1. Code web site page(s) with HTML and CSS, including form
2. Add the required HTML attributes
    - form 
        - name="your-form-name"
        - method="POST"
        - data-netlify="true"
    - inputs
        - name="your-field-name"
    - submit button
        - type="submit"
3. Browse to [Netlify](netlify.com)
    - create account
    - can log in with Github (which as a dev, one should have already)
    - go to the Sites section
    - drag your web page folder from your PC to the area at the bottom of the Sites section
    - site is now published under the displayed URL (something.netlify.app)
        - can customise the URL
    - your web site is now published 
4. Browse to your web site URL
    - fill in the form and submit
    - back on the Netlify Dashboard
        - recent form submissions
        - download as CSV

Note:
- Netlify free tier gives 100 form submissions per month
- plus the free deployment of the site of course
- can have multiple forms on same web site
    - differentiate by form name attribute (see above)

For more details see the [Netlify Forms documentaton](https://docs.netlify.com/forms/setup/)


Further added, in this particular example:
- Auto-deploy via Git & Github
- Serverless functions
- Supabase integration


        
