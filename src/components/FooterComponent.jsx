import React from 'react'

function FooterComponent() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 to-gray-700 text-white text-center p-4">
        <div>
            <p>Work made with React + Tailwind + Framer Motion</p>
            <div className="flex flex-row justify-center space-x-4 pt-2">

                <a href="https://github.com/Simone-Fratini" target="_blank" className="text-blue-200 hover:underline">
                  Simone Fratini
                </a>
                
            </div>

        </div>
        <div className="container mx-auto pt-3">
            <p className="text-sm">&copy; 2025 Boolean Film-Shop. All rights reserved.</p>
        </div>
        
    </footer>

  )
}

export default FooterComponent