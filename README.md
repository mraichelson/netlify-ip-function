# Netlify IP function

Ever needed to check the IP address of a user in your JS code? Me too.

I know there are existing services out there for doing this, but some of them can be blocked by privacy tools and the like (and felt like overkill sometimes). So here's a file you can add into your functions directory for projects being hosted on [Netlify](https://netlify.com/) that will get the user's IP address for you.

Once this is in place, you should be able to make requests against `/.netlify/functions/ip` on your hostname to get a JSON object with the user's IP.

Depending on your needs you may want to poke around with the `Access-Control-Allow-Origin` header in there if you want to restrict access to a particular hostname.