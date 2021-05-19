const { createClient } = require('@supabase/supabase-js');

const {SUPABASE_URL,SUPABASE_KEY} = process.env;

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

//console.log('supabase ok');

exports.handler = async function(event, context) {
    if(event.httpMethod==='POST') {
        let {name,email,framework,message} =  JSON.parse(event.body);
        
        const { data, error } = await supabase
        .from('formSubmits')
        .insert([
            {name,email,framework,message}
        ]);   
    
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({error:"GET not handled on this route!"})
        };

    }

    
}