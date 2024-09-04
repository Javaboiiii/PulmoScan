export default function detectDisease({ 
name,
isbreath,
isbreathlong,
iscough,
agedisease,
isasymptomatic,
dosmoke,
dosmokeyear,
dosmokebiomass,
dosmokeyearduration,
peakflow
}) { 
    if(!isbreath.value) { 
        return 'No clinically relevant Asthma or COPD'
    }else { 
        return howLong(
            isbreathlong,
            iscough,
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
            peakflow
        )
    }
    // if(!isbreath.value) { 
    //     return 'No clinically relevant Asthma or COPD'
    // }
    // if(!isbreathlong){
    //     return 'Unlikely to have Asthma or COPD'
    // }
    // if(!peakflow){
    //     return 'Unlikely to have Asthma or COPD'
    // }
    // if(!agedisease) {
    //     return 'Likely to have asthma, unlikely to have COPD'
    // }
    // if(dosmokeyear < 10 ) { 
    //     if(dosmokeyearduration < 20) { 
    //         return 'Likely to have Asthma'
    //     }else { 
    //         if(isasymptomatic){
    //             return 'Likely to have asthma'
    //         }else { 
    //             return 'Likely to have COPD'
    //         }
    //     }
    // }else { 
    //     if(isasymptomatic){
    //         return 'Likely to have asthma'
    //     }else { 
    //         return 'Likely to have COPD'
    //     }
    // }
}

const howLong = (
            isbreathlong,
            iscough,
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
            peakflow
) => {
    if(!isbreathlong.value) { 
        return 'Unlikely to have Asthma or COPD'
    }else{
        return cough(
            iscough,
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
            peakflow
        )
    }
}

const cough = (
            iscough,
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
            peakflow
) => { 
    if(!iscough.value) { 
        return 'Unlikely to have Asthma or COPD'
    }else { 
        return doPeakflow(
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
            peakflow
        )
    }
}

const doPeakflow = ( 
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
            peakflow
) => { 
    if(!peakflow.value) { 
        return 'No clinically relevant asthma or COPD'
    }else { 
        return howsymtoms(
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
        )
    }
}

const howsymtoms = ( 
            agedisease,
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
) => { 
    if(!agedisease.value) { 
        return 'Likely to have asthma, Unlikely to have COPD'
    }else{
        return smokeHistory(
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
        )
    }
}

const smokeHistory = (
            isasymptomatic,
            dosmoke,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
) => { 
    if(!dosmoke.value) { 
        return 'No relevant'
    }else { 
        return detailSmoke(
            isasymptomatic,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
        )
    }
}

const detailSmoke = (
            isasymptomatic,
            dosmokeyear,
            dosmokebiomass,
            dosmokeyearduration,
) => { 
    if(parseInt(dosmokeyear) < 10 && parseInt(dosmokeyearduration) < 20){
         return 'Likely to have Asthma, unlikely to have COPD'
    }else { 
        return asymtomaticResult(isasymptomatic)
    }
}

const asymtomaticResult = (isasymptomatic) => { 
    if(isasymptomatic.value) { 
        return 'Likely to have Asthma, unlikely to have COPD'
    }
    if(isasymptomatic === '') {
        return 'Fill those fields'
    }
    if(!isasymptomatic.value){ 
        return 'Likely to have COPD, unlikely to have Asthma'
    }
}