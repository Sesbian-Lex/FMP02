
import './DFA.css'

function Diagram( {currentState, failState, finalState} ) {

    return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 300"
            className="state-diagram"
            >

            <defs>
                <marker
                id="arrow"
                markerWidth="10"
                markerHeight="10"
                refX="10"
                refY="5"
                orient="auto"
                >
                <path d="M0,0 L10,5 L0,10 Z" fill="white" />
                </marker>

                <marker
                id="arrow-reverse"
                markerWidth="10"
                markerHeight="10"
                refX="0"
                refY="5"
                orient="auto"
                >
                <path d="M10,0 L0,5 L10,10 Z" fill="white" />
                </marker>
            </defs>


            <circle cx="80" cy="80" r="35" className={`state 
                ${currentState === 'Q0' ? 'active' : ''} 
                ${failState === 'Q0' ? 'fail' : ''}
                ${finalState === 'Q0accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q0reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="250" cy="80" r="35" className={`state  
                ${currentState === 'Q1' ? 'active' : ''} 
                ${failState === 'Q1' ? 'fail' : ''}
                ${finalState === 'Q1accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q1reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="80" cy="220" r="35" className={`state 
                ${currentState === 'Q2' ? 'active' : ''} 
                ${failState === 'Q2' ? 'fail' : ''}
                ${finalState === 'Q2accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q2reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="250" cy="220" r="35" className={`state 
                ${currentState === 'Q3' ? 'active' : ''} 
                ${failState === 'Q3' ? 'fail' : ''}
                ${finalState === 'Q3accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q3reject' ? 'low-health-trigger' : ''}`} />

            <circle cx="80" cy="220" r="30" className="final-ring" />

            <text x="80" y="85" textAnchor="middle" className="label">1</text>
            <text x="250" y="85" textAnchor="middle" className="label">2</text>
            <text x="80" y="225" textAnchor="middle" className="label">3</text>
            <text x="250" y="225" textAnchor="middle" className="label">4</text>

            <line   x1="115" y1="80" 
                    x2="215" y2="80" 
                    className="transition a" 
                    markerEnd="url(#arrow)" 
                    markerStart="url(#arrow-reverse)"/>

            <line   x1="250" y1="115" 
                    x2="250" y2="185" 
                    className="transition b" 
                    markerEnd="url(#arrow)" 
                    markerStart="url(#arrow-reverse)"/>

            <line   x1="80" y1="185" 
                    x2="80" y2="115" 
                    className="transition b" 
                    markerEnd="url(#arrow)" 
                    markerStart="url(#arrow-reverse)"/>

            <line   x1="215 " y1="220" 
                    x2="115" y2="220" 
                    className="transition a-back" 
                    markerEnd="url(#arrow)" 
                    markerStart="url(#arrow-reverse)" />

            <text x="165" y="70" className="tlabel">a</text>
            <text x="165" y="235" className="tlabel">a</text>
            <text x="260" y="150" className="tlabel">b</text>
            <text x="70" y="150" className="tlabel">b</text>

            <polygon points="45,80 20,65 20,95" className="start-arrow" />
            </svg>
        )
}

export default Diagram
