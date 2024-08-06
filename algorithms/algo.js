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
    }
    if(!isbreathlong){
        return 'Unlikely to have Asthma or COPD'
    }
    if(!peakflow){
        return 'Unlikely to have Asthma or COPD'
    }
    if(!agedisease) {
        return 'Likely to have asthma, unlikely to have COPD'
    }
    if(dosmokeyear < 10 ) { 
        if(dosmokeyearduration < 20) { 
            return 'Likely to have Asthma'
        }else { 
            if(isasymptomatic){
                return 'Likely to have asthma'
            }else { 
                return 'Likely to have COPD'
            }
        }
    }else { 
        if(isasymptomatic){
            return 'Likely to have asthma'
        }else { 
            return 'Likely to have COPD'
        }
    }
}