import { NextResponse } from "next/server";

export async function GET(){
  try {
    const timestamp = Date.now();
const response = await fetch(`http://52.66.71.14:8080/api/dns?timestamp=${timestamp}`);


    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    
  }
 
}

