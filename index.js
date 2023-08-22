const { default: Link } = require("next/link");


function LandingPage () {
    return (
        <div>
            <h1>Landing Page</h1>
            <p>Exolore our comprehensive documentation for dreamfeel</p>

            <Link href="/pages" >
                <a>Start Exporing</a>
            </Link>
        </div>
    );
}

export default LandingPage;