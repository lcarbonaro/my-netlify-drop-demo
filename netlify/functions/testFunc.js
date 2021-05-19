

exports.handler = async function(event, context) {

    import { createClient } from '@supabase/supabase-js';

    const {SUPABASE_URL,SUPABASE_KEY} = process.env;

    const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

    console.log('supabase ok');




    return {
        statusCode: 200,
        body: JSON.stringify({hello: "world"})
    };
}