const1 = ['crew member',
    'production crew member',
    'video crew member'
];

const2 = ['designation',
    'status',
    'label',
    'classification'
];

const3 = ['an extra',
    'an additional',
    'a supplementary',
    'yet another',
    'one extra',
    'one additional'
];

const4 = ['sign',
    'mark',
    'signal',
    'indication',
    'symbol',
    'endorsement'
];

const5 = ['quality',
    'high quality',
    'top quality',
    'good quality',
    'excellence',
    'top notch quality',
    'outstanding quality',
    'superior quality',
    'high-quality',
    'value',
    'superiority'
];

const6 = ['crews',
    'crew members',
    'production crew members',
    'video crew members'
];

const7 = ['have been',
    'are actually',
    'are already',
    'are entirely',
    'have been completely'
];

const8 = ['vetted',
    'checked'
];

const9 = ['crew members',
    'production crew members',
    'video crew members',
    'film staff'
];

const10 = ['that have been',
    'who have been',
    'which have been'
];

const11 = ['many times',
    'often',
    'frequently',
    'repeatedly',
    'on numerous occasions',
    'again and again',
    'many times before'
];

const12 = ['quality',
    'high quality',
    'top notch',
    'excellent'
];

const13 = ['You can trust that',
    'You can rely on',
    'You can be confident',
    'You can depend on',
    'Have confidence'
];

const14 = ['crew',
    'staff member'
];

const15 = ['will',
    'will certainly',
    'is going to',
    'would certainly',
    'will definitely'
];

const16 = ['bring',
    'deliver',
    'provide'
];

const17 = ['an extra',
    'an additional'
];

const18 = ['level of',
    'amount of',
    'degree of'
];



function change() {

    const random_integer1 = Math.floor(Math.random() * 3);
    const random_integer2 = Math.floor(Math.random() * 4);
    const random_integer3 = Math.floor(Math.random() * 6);
    const random_integer4 = Math.floor(Math.random() * 6);
    const random_integer5 = Math.floor(Math.random() * 10);
    const random_integer6 = Math.floor(Math.random() * 4);
    const random_integer7 = Math.floor(Math.random() * 5);
    const random_integer8 = Math.floor(Math.random() * 2);
    const random_integer9 = Math.floor(Math.random() * 4);
    const random_integer10 = Math.floor(Math.random() * 3);
    const random_integer11 = Math.floor(Math.random() * 7);
    const random_integer12 = Math.floor(Math.random() * 4);
    const random_integer13 = Math.floor(Math.random() * 5);
    const random_integer14 = Math.floor(Math.random() * 2);
    const random_integer15 = Math.floor(Math.random() * 5);
    const random_integer16 = Math.floor(Math.random() * 3);
    const random_integer17 = Math.floor(Math.random() * 2);
    const random_integer18 = Math.floor(Math.random() * 3);

    const str = "Dave Baker is an Elite " + const1[random_integer1] + ". This " + const2[random_integer2] + " by Assignment Desk is " + const3[random_integer3] + " " + const4[random_integer4] + " of " + const5[random_integer5] + ". Elite " + const6[random_integer6] + " " + const7[random_integer7] + " " + const8[random_integer8] + " by Assignment Desk as " + const9[random_integer9] + " " + const10[random_integer10] + " on shoots " + const11[random_integer11] + " with " + const12[random_integer12] + " equipment. " + const13[random_integer13] + " an Elite " + const14[random_integer14] + " " + const15[random_integer15] + " " + const16[random_integer16] + " " + const17[random_integer17] + " " + const18[random_integer18] + " service on your shoot.";

    return str
};

console.log(change());