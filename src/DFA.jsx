
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
            <circle cx="400" cy="60" r="35" className={`state 
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
                ${finalState === 'QXreject' ? 'low-health-trigger' : ''}`} />

            <circle cx="400" cy="60" r="30" className="final-ring" />
            <circle cx="550" cy="60" r="30" className="final-ring" />
            {/* <circle cx="700" cy="60" r="30" className="final-ring" /> */}

            {/* Row 2: 3 - 5 */}
            <circle cx="500" cy="180" r="35" className={`state 
                ${currentState === 'Q3' ? 'active' : ''} 
                ${failState === 'Q3' ? 'fail' : ''}
                ${finalState === 'Q3accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q3reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="650" cy="180" r="35" className={`state 
                ${currentState === 'Q5' ? 'active' : ''} 
                ${failState === 'Q5' ? 'fail' : ''}
                ${finalState === 'Q5accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q5reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="650" cy="180" r="30" className="final-ring" />

            {/* Row 3: 2 - 4 - 7 */}
            <circle cx="400" cy="180" r="35" className={`state 
                ${currentState === 'Q2' ? 'active' : ''} 
                ${failState === 'Q2' ? 'fail' : ''}
                ${finalState === 'Q2accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q2reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="450" cy="300" r="35" className={`state 
                ${currentState === 'Q4' ? 'active' : ''} 
                ${failState === 'Q4' ? 'fail' : ''}
                ${finalState === 'Q4accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q4reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="150" cy="300" r="35" className={`state 
                ${currentState === 'Q7' ? 'active' : ''} 
                ${failState === 'Q7' ? 'fail' : ''}
                ${finalState === 'Q7accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q7reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="150" cy="300" r="30" className="final-ring" />

            {/* Row 4: 1 - 6 */}
            <circle cx="150" cy="120" r="35" className={`state 
                ${currentState === 'Q1' ? 'active' : ''} 
                ${failState === 'Q1' ? 'fail' : ''}
                ${finalState === 'Q1accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q1reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="250" cy="120" r="35" className={`state 
                ${currentState === 'Q6' ? 'active' : ''} 
                ${failState === 'Q6' ? 'fail' : ''}
                ${finalState === 'Q6accept' ? 'heal-trigger' : ''}
                ${finalState === 'Q6reject' ? 'low-health-trigger' : ''}`} />
            <circle cx="250" cy="120" r="30" className="final-ring" />

            {/* --- LABELS --- */}
            <text x="150" y="125" textAnchor="middle" className="label">1</text>
            <text x="250" y="125" textAnchor="middle" className="label">6</text>
            <text x="150" y="305" textAnchor="middle" className="label">7</text>
            <text x="400" y="185" textAnchor="middle" className="label">2</text>
            <text x="450" y="305" textAnchor="middle" className="label">4</text>
            <text x="500" y="185" textAnchor="middle" className="label">3</text>
            <text x="650" y="185" textAnchor="middle" className="label">5</text>
            <text x="400" y="65" textAnchor="middle" className="label">8</text>
            <text x="550" y="65" textAnchor="middle" className="label">9</text>
            <text x="700" y="65" textAnchor="middle" className="label">10</text>

            {/* --- TRANSITIONS --- */}

            {/* Start arrow */}
            <polygon points="100,120 75,105 75,135" className="start-arrow" />

            {/* 1 -> 6 (a) */}
            <line x1="185" y1="120" x2="215" y2="120" className="transition a" markerEnd="url(#arrow)" />
            <text x="200" y="110" className="tlabel">a</text>

            {/* 1 -> 7 (b) */}
            <line x1="150" y1="155" x2="150" y2="265" className="transition b" markerEnd="url(#arrow)" />
            <text x="160" y="220" className="tlabel">b</text>

            {/* 6 -> 8 (b) */}
            <line x1="285" y1="120" x2="365" y2="60" className="transition b" markerEnd="url(#arrow)" />
            <text x="330" y="75" className="tlabel">b</text>

            {/* 6 -> 6 (a loop) */}
            <path d="M230,90 Q260,40 280,98" className="transition a" markerEnd="url(#arrow)" />
            <text x="265" y="65" className="tlabel">a</text>

            {/* 8 -> 9 (a) */}
            <line x1="435" y1="60" x2="515" y2="60" className="transition a" markerEnd="url(#arrow)" />
            <text x="475" y="50" className="tlabel">a</text>

            {/* 8 -> 7 (b) */}
            <line x1="373" y1="85" x2="173" y2="273" className="transition b" markerEnd="url(#arrow)" />
            <text x="270" y="190" className="tlabel">b</text>

            {/* 9 -> 10 (a) */}
            <line x1="585" y1="60" x2="665" y2="60" className="transition a" markerEnd="url(#arrow)" />
            <text x="625" y="50" className="tlabel">a</text>

            {/* 9 -> 2 (b) */}
            <line x1="525" y1="85" x2="425" y2="155" className="transition b" markerEnd="url(#arrow)" />
            <text x="470" y="115" className="tlabel">b</text>

            {/* 10 -> 10 (a,b loop) */}
            <path d="M700,25 Q810,10 735,60" className="transition a" markerEnd="url(#arrow)" />
            <text x="760" y="50" className="tlabel">a,b</text>

            {/* 3 -> 2 (b) */}
            <line x1="470" y1="200" x2="430" y2="200" className="transition b" markerEnd="url(#arrow)" />
            <text x="450" y="220" className="tlabel">b</text>

            {/* 2 -> 3 (a) */}
            <line x1="430" y1="160" x2="470" y2="160"  className="transition b" markerEnd="url(#arrow)" />
            <text x="450" y="150" className="tlabel">a</text>

            {/* 3 -> 10 (a) */}
            <line x1="525" y1="155" x2="670" y2="80" className="transition a" markerEnd="url(#arrow)" />
            <text x="600" y="105" className="tlabel">a</text>

            {/* 5 -> 10 (a,b) */}
            <line x1="660" y1="145" x2="690" y2="95" className="transition ab" markerEnd="url(#arrow)" />
            <text x="685" y="120" className="tlabel">a,b</text>

            {/* 4 -> 5 (a) */}
            <line x1="485" y1="300" x2="630" y2="210" className="transition a" markerEnd="url(#arrow)" />
            <text x="565" y="240" className="tlabel">a</text>

            {/* 4 -> 4 (b loop) */}
            <path d="M425,325 Q450,400 475,325" className="transition b" markerEnd="url(#arrow)" />
            <text x="445" y="375" className="tlabel">b</text>

            {/* 7 -> 4 (b) */}
            <line x1="185" y1="300" x2="415" y2="300" className="transition b" markerEnd="url(#arrow)" />
            <text x="300" y="290" className="tlabel">b</text>

            {/* 7 -> 5 (a) */}
            <line x1="183" y1="285" x2="620" y2="200" className="transition a" markerEnd="url(#arrow)" />
            <text x="300" y="255" className="tlabel">a</text>
            </svg>

        )
}

export default Diagram
