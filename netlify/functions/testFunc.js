const { createClient } = require('@supabase/supabase-js');

const {SUPABASE_URL,SUPABASE_KEY} = process.env;

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

console.log('supabase ok');

exports.handler = async function(event, context) {
   
    return {
        statusCode: 200,
        body: JSON.stringify({hello: "world"})
    };
}