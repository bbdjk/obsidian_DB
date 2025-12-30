const DATA_GOF = [
    // ==========================================
    // GOF 팩션 특성
    // ==========================================
    { 
        id:'gof_ability', type:'rule', cat:'GOF', title:'⭐ [팩션 능력] 커맨드 시스템', 
        sub:'Guardians of Freedom Special Ability', 
        color:'gof',
        details:[
            {h:'커맨드 토큰 (Command Token)', t:'GOF 진영은 드론을 활성화하기 위해 **커맨드 토큰**이라는 특수 자원을 사용합니다.'},
            {h:'커맨드 생성 (Generation)', t:'커맨드 페이즈 시작 시, 각 GOF 메카는 기본적으로 **1개의 커맨드 토큰**을 생성합니다.<br>(일부 파츠 효과로 추가 생성 가능)'},
            {h:'지시 (Command/Order)', t:'플레이어는 커맨드 토큰 1개를 소모하여, 사거리(통제 범위) 내의 아군 드론 1기를 **활성화**하여 액션을 수행하게 합니다.'},
            {h:'조정 (Coordinate)', t:'일부 특수 액션이나 능력으로, 아군 유닛에게 **추가 액션 기회**를 부여하거나 드론을 즉시 반응시키는 GOF만의 전술적 행동입니다.'}
        ]
    },
    { 
        id:'gof_sample', type:'unit', cat:'GOF', title:'GOF Sample Unit', sub:'Torso', color:'gof',
        stats:{Armor:0, Struct:0, EW:0},
        details:[{h:'[샘플]', t:'추가 GOF 데이터가 있다면 이곳에 입력됩니다.'}]
    }
];
