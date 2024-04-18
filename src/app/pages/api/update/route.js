import { NextRequest, NextResponse } from "next/server";

export  async function PUT(req) {
  

  try {
    // Access URL parameters from req.query
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const domain = searchParams.get("domain");
    const type = searchParams.get("type");
    const values = searchParams.get("values");

    // Validate parameters (optional)
    console.log(domain);

    // Construct the external API request URL
    const external_link = `http://52.66.71.14:8080/api/dns/update/${domain}?type=${type}&values=${values}`;

    // Perform the DELETE request with JSON data
    const response = await fetch(external_link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      const responseData = await response.json();
      return NextResponse.json(responseData); // Return successfully parsed JSON
    } else {
      throw new Error(`Failed to update DNS record: ${await response.text()}`); // Handle non-2xx responses
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); // Handle errors gracefully
  }
}
