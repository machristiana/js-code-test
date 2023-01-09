const value1 = ['crew member',
    'production crew member',
    'video crew member'
];

const value2 = ['designation',
    'status',
    'label',
    'classification'
];

const value3 = ['an extra',
    'an additional',
    'a supplementary',
    'yet another',
    'one extra',
    'one additional'
];

const value4 = ['sign',
    'mark',
    'signal',
    'indication',
    'symbol',
    'endorsement'
];

const value5 = ['quality',
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

const value6 = ['crews',
    'crew members',
    'production crew members',
    'video crew members'
];

const value7 = ['have been',
    'are actually',
    'are already',
    'are entirely',
    'have been completely'
];

const value8 = ['vetted',
    'checked'
];

const value9 = ['crew members',
    'production crew members',
    'video crew members',
    'film staff'
];

const value10 = ['that have been',
    'who have been',
    'which have been'
];

const value11 = ['many times',
    'often',
    'frequently',
    'repeatedly',
    'on numerous occasions',
    'again and again',
    'many times before'
];

const value12 = ['quality',
    'high quality',
    'top notch',
    'excellent'
];

const value13 = ['You can trust that',
    'You can rely on',
    'You can be confident',
    'You can depend on',
    'Have confidence'
];

const value14 = ['crew',
    'staff member'
];

const value15 = ['will',
    'will certainly',
    'is going to',
    'would certainly',
    'will definitely'
];

const value16 = ['bring',
    'deliver',
    'provide'
];

const value17 = ['an extra',
    'an additional'
];

const value18 = ['level of',
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

    const str = "Dave Baker is an Elite " + value1[random_integer1] + ". This " + value2[random_integer2] + " by Assignment Desk is " + value3[random_integer3] + " " + value4[random_integer4] + " of " + value5[random_integer5] + ". Elite " + value6[random_integer6] + " " + value7[random_integer7] + " " + value8[random_integer8] + " by Assignment Desk as " + value9[random_integer9] + " " + value10[random_integer10] + " on shoots " + value11[random_integer11] + " with " + value12[random_integer12] + " equipment. " + value13[random_integer13] + " an Elite " + value14[random_integer14] + " " + value15[random_integer15] + " " + value16[random_integer16] + " " + value17[random_integer17] + " " + value18[random_integer18] + " service on your shoot.";

    return str
};

console.log(change());