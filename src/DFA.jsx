
import './DFA.css'

function Diagram( {currentState, failState, finalState} ) {

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
            {/* Row 1: 8 - 9 - 10 */}
            {/* <circle cx="400" cy="60" r="35" className={`state 
                ${currentState === 'Q8' ? 'active' : ''} 
                ${failState === 'Q8' ? 'fail' : ''}
                ${finalState === 'Q8accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q8reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="550" cy="60" r="35" className={`state 
                ${currentState === 'Q9' ? 'active' : ''} 
                ${failState === 'Q9' ? 'fail' : ''}
                ${finalState === 'Q9accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q9reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="700" cy="60" r="35" className={`state 
                ${currentState === 'QX' ? 'active' : ''} 
                ${failState === 'QX' ? 'fail' : ''}
                ${finalState === 'QXaccept' ? 'heal-trigger' : ''}
                ${finalState === 'QXreject' ? 'low-health-trigger' : ''}`} /> */}

            {/* <circle cx="400" cy="60" r="30" className="final-ring" />
            <circle cx="550" cy="60" r="30" className="final-ring" /> */}
            

            {/* Row 2: 3 - 5 */}
            <circle cx="400" cy="50" r="35" className={`state 
                ${currentState === 'Q3' ? 'active' : ''} 
                ${failState === 'Q3' ? 'fail' : ''}
                ${finalState === 'Q3accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q3reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="650" cy="250" r="35" className={`state 
                ${currentState === 'Q5' ? 'active' : ''} 
                ${failState === 'Q5' ? 'fail' : ''}
                ${finalState === 'Q5accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q5reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="650" cy="250" r="30" className="final-ring" />

            {/* Row 3: 2 - 4 - 7 */}
            <circle cx="400" cy="180" r="35" className={`state 
                ${currentState === 'Q2' ? 'active' : ''} 
                ${failState === 'Q2' ? 'fail' : ''}
                ${finalState === 'Q2accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q2reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="400" cy="350" r="35" className={`state 
                ${currentState === 'Q4' ? 'active' : ''} 
                ${failState === 'Q4' ? 'fail' : ''}
                ${finalState === 'Q4accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q4reject' ? 'low-health-trigger' : ''}`} />
            {/* <circle cx="150" cy="300" r="35" className={`state 
                ${currentState === 'Q7' ? 'active' : ''} 
                ${failState === 'Q7' ? 'fail' : ''}
                ${finalState === 'Q7accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q7reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="150" cy="300" r="30" className="final-ring" /> */}

            {/* Row 4: 1 - 6 */}
            <circle cx="150" cy="250" r="35" className={`state 
                ${currentState === 'Q1' ? 'active' : ''} 
                ${failState === 'Q1' ? 'fail' : ''}
                ${finalState === 'Q1accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q1reject' ? 'low-health-trigger' : ''}`} />
            {/* <circle cx="250" cy="120" r="35" className={`state 
                ${currentState === 'Q6' ? 'active' : ''} 
                ${failState === 'Q6' ? 'fail' : ''}
                ${finalState === 'Q6accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q6reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="250" cy="120" r="30" className="final-ring" /> */}

            {/* --- LABELS --- */}
            <text x="150" y="255" textAnchor="middle" className="label">1</text>
            {/* <text x="250" y="125" textAnchor="middle" className="label">6</text>
            <text x="150" y="305" textAnchor="middle" className="label">7</text> */}
            <text x="400" y="185" textAnchor="middle" className="label">2</text>
            <text x="400" y="355" textAnchor="middle" className="label">4</text>
            <text x="400" y="55" textAnchor="middle" className="label">3</text>
            <text x="650" y="255" textAnchor="middle" className="label">5</text>
            {/* <text x="400" y="65" textAnchor="middle" className="label">8</text>
            <text x="550" y="65" textAnchor="middle" className="label">9</text>
            <text x="700" y="65" textAnchor="middle" className="label">10</text> */}

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
