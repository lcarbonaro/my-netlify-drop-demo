Trying out Netlify Drop, then adding:
- form and form submission
- serverless functions
- supabase integration

Steps for simplest Netlify set-up:
1. Code web page with HTML and CSS, including form
2. Add the required HTML attributes
    - form 
        - name="your-form-name"
        - method="POST"
        - data-netlify="true"
    - inputs
        - name="your-field-name"
    - submit button
        - type="submit"
        
