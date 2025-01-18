import React, {ReactNode} from "react"

interface GradientTextProp {
    children: ReactNode
}

const GradientText: React.FC<GradientTextProp> =({children}) => {
    return (
        <div
            data-aos="zoom-out"
            className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent animate-gradient-move"
            style={{ 
                backgroundSize: "200% 200%",
                textShadow: "0 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.3)" 
            }}
        >
            {children}
        </div>
    )
}

export default GradientText