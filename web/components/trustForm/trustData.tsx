export interface TrustType {
    id: string;
    desc: string;
    parameters: {};
}

export const TrustData: {[key: string]: TrustType}= { 
    'basic': {
        id: 'basic',
        desc: 'Basic Trust',
        parameters: {unlockTime: 0, benificiary: '0x0000000000000000000000000000000000000000'}
    },
    'Revocable': {
        id: 'Revocable',
        desc: 'Revocable by owner',
        parameters: {unlockTime: 0, benificiary: '0x0000000000000000000000000000000000000000'}
    },
    'Tontine': {
        id: 'Tontine',
        desc: 'Can only be withdrawn upon owners death',
        parameters: {checkInFreq: 0, benificiary: '0x0000000000000000000000000000000000000000'}
    },

};  


