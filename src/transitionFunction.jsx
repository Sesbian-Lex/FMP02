function TransitionDiagram({transFunc, acceptStates, accepted}){
    let functionDiagram = [];
    functionDiagram.push(<div key={'C'} className='stateArrow'>▶</div>)

        console.log("accept States: ", acceptStates)
    for (let i = 0; i<transFunc.length; i++){
        switch (transFunc[i]) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case 'X':
                if (i == transFunc.length - 1 && acceptStates.includes('Q' + transFunc[i]) && accepted) functionDiagram.push(<div key={'C' + i} className='stateNumber acceptFinal'>{transFunc[i]}</div>)
                else if(i == transFunc.length - 1) functionDiagram.push(<div key={'C' + i} className='stateNumber rejectFinal'>{transFunc[i]}</div>)
                else functionDiagram.push(<div key={'C' + i} className='stateNumber'>{transFunc[i]}</div>)
                break;
            case 'a':
            case 'b':
                functionDiagram.push(<div key={'C' + i} className='stateArrow'>→{transFunc[i]}→</div>)
                break;
            }
    }



    return <div className='transFuncContainer'>{functionDiagram}</div>;
}

export default TransitionDiagram