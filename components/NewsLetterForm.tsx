'use client';

import { useState } from "react";


function NewsLetterForm() {
    const[input,setInput]= useState("");

    console.log(input);
  return (
    <div className="flex flex-col space-y-8 md:w-[400px]">
        <form className="newsletter-form mt-10 animate-fade-in-3">  
            <div>
                {/* <EnvelopeIcon/> */}
                <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                type="text" 
                placeholder="Email address"/>
                <button>
                    
                </button>
            </div>
        </form>
    </div>
  )
}

export default NewsLetterForm