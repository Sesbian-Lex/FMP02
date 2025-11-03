
import './DFA.css'

function Diagram( {currentState, failState, finalState} ) {

    console.log('passed finalState: ', finalState)
    return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 400"
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

            {/* --- STATES --- */}

            {/* Row 2: 3 - 5 */}
            <circle cx="400" cy="50" r="35" className={`state 
                ${currentState.includes("Q3") ? 'active' : ''} 
                ${failState.includes("Q3") ? 'fail' : ''}
                ${(finalState.includes("Q3") && finalState.includes("accept")) ? 'heal-trigger' : ''}
                ${(finalState.includes("Q3") && finalState.includes("reject")) ? 'low-health-trigger' : ''}`} />
            <circle cx="650" cy="250" r="35" className={`state 
                ${currentState.includes("Q5")  ? 'active' : ''} 
                ${failState.includes("Q5") ? 'fail' : ''}
                ${(finalState.includes("Q5") && finalState.includes("accept")) ? 'heal-trigger' : ''}
                ${(finalState.includes("Q5") && finalState.includes("reject")) ? 'low-health-trigger' : ''}`} />
            <circle cx="650" cy="250" r="30" className="final-ring" />

            {/* Row 3: 2 - 4 - 7 */}
            <circle cx="400" cy="180" r="35" className={`state 
                ${currentState.includes("Q2")  ? 'active' : ''} 
                ${failState.includes("Q2") ? 'fail' : ''}
                ${(finalState.includes("Q2") && finalState.includes("accept")) ? 'heal-trigger' : ''}
                ${(finalState.includes("Q2") && finalState.includes("reject")) ? 'low-health-trigger' : ''}`} />
            <circle cx="400" cy="350" r="35" className={`state 
                ${currentState.includes("Q4")  ? 'active' : ''} 
                ${failState.includes("Q4")  ? 'fail' : ''}
                ${(finalState.includes("Q4") && finalState.includes("accept")) ? 'heal-trigger' : ''}
                ${(finalState.includes("Q4") && finalState.includes("reject")) ? 'low-health-trigger' : ''}`} />
            {/* Row 4: 1 - 6 */}
            <circle cx="150" cy="250" r="35" className={`state 
                ${currentState.includes("Q1")  ? 'active' : ''} 
                ${failState.includes("Q1") ? 'fail' : ''}
                ${(finalState.includes("Q1") && finalState.includes("accept")) ? 'heal-trigger' : ''}
                ${(finalState.includes("Q1") && finalState.includes("reject")) ? 'low-health-trigger' : ''}`} />
            

            {/* --- LABELS --- */}
            <text x="150" y="255" textAnchor="middle" className="label">1</text>
            <text x="400" y="185" textAnchor="middle" className="label">2</text>
            <text x="400" y="355" textAnchor="middle" className="label">4</text>
            <text x="400" y="55" textAnchor="middle" className="label">3</text>
            <text x="650" y="255" textAnchor="middle" className="label">5</text>
            
            {/* --- TRANSITIONS --- */}
            {/* Start arrow */}
            <polygon points="115,250 75,225 75,275" className="start-arrow" />

            {/* 3 -> 2 (b) */}
            <line x1="420" y1="80" x2="420" y2="150" className="transition b" markerEnd="url(#arrow)" />
            <text x="425" y="120" className="tlabel">b</text>

            {/* 2 -> 3 (a) */}
            <line x1="380" y1="150" x2="380" y2="80"  className="transition b" markerEnd="url(#arrow)" />
            <text x="370" y="120" className="tlabel">a</text>

            {/* 1 -> 3 (a) */}
            <line x1="180" y1="235" x2="370" y2="70" className="transition a" markerEnd="url(#arrow)" />
            <text x="220" y="180" className="tlabel">a</text>

            {/* 1 -> 2 (a,b) */}
            <line x1="185" y1="240" x2="365" y2="180" className="transition ab" markerEnd="url(#arrow)" />
            <text x="250" y="210" className="tlabel">a</text>

            {/* 4 -> 5 (a) */}
            <line x1="425" y1="325" x2="620" y2="265" className="transition a" markerEnd="url(#arrow)" />
            <text x="500" y="290" className="tlabel">a</text>

            {/* 4 -> 4 (b loop) */}
            <path d="M375,375 Q450,445 435,350" className="transition b" markerEnd="url(#arrow)" />
            <text x="445" y="375" className="tlabel">b</text>

            {/* 1 -> 1 (a loop) */}
            <path d="M175,225 Q150,125 135,215" className="transition b" markerEnd="url(#arrow)" />
            <text x="150" y="165" className="tlabel">a</text>

            {/* 1 -> 4 (a, b) */}
            <line x1="185" y1="260" x2="370" y2="330" className="transition b" markerEnd="url(#arrow)" />
            <text x="300" y="290" className="tlabel">a, b</text>

            {/* 1 -> 5 (a, b) */}
            <line x1="435" y1="185" x2="615" y2="235" className="transition a" markerEnd="url(#arrow)" />
            <text x="475" y="180" className="tlabel">b</text>

            {/* 2 -> 5 (a, b) */}
            <line x1="185" y1="250" x2="615" y2="250" className="transition a" markerEnd="url(#arrow)" />
            <text x="300" y="240" className="tlabel">a, b</text>
            </svg>

        )
}

export default Diagram
