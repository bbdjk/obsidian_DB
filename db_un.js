const DATA_UN = [
    // ==========================================
    // 1. 토르소 (Torso)
    // ==========================================
    { 
        id:'un_graywolf', type:'unit', cat:'UN', title:'TM31C "Gray Wolf"', sub:'Torso / Cost: 44', color:'un',
        stats:{Armor:7, Struct:1, EW:3},
        details:[
            {h:'[섬광탄] (발사 액션)', t:'곡사. M9 섬광탄 1발 발사.'},
            {h:'[곡사]', t:'낙하 지점이나 목표물에 대한 시야가 필요하지 않습니다.'}
        ]
    },
    { 
        id:'un_caracal', type:'unit', cat:'UN', title:'TM31R "Caracal"', sub:'Torso / Cost: 45', color:'un',
        stats:{Armor:6, Struct:1, EW:4},
        details:[
            {h:'[조정 감시] (패시브)', t:'아군 유닛이 사격 액션을 수행할 때, 해당 사격의 대상이 이 메카의 시야에 들어온다면, 해당 공격 굴림의 눈은 재굴림할 수 있습니다.'}
        ]
    },
    { 
        id:'un_bison', type:'unit', cat:'UN', title:'TM35B "Bison"', sub:'Torso / Cost: 72', color:'un',
        stats:{Armor:8, Struct:2, EW:3},
        details:[
            {h:'[KC 장갑] (패시브)', t:'이 메카가 공격받을 시, 이 부품의 충전됨 토큰을 소모하여 [번개]를 [방어]로 취급할 수 있습니다.'},
            {h:'[피탐 증폭] (쾌속 액션)', t:'이 메카는 하이라이트 토큰을 획득합니다.'},
            {h:'[하이라이트]', t:'적 유닛이 공격할 때 하이라이트 된 유닛이 대상에 포함되면 반드시 그 유닛을 공격해야 합니다.'}
        ]
    },
    { 
        id:'un_alligator', type:'unit', cat:'UN', title:'TM35N "Alligator"', sub:'Torso / Cost: 72', color:'un',
        stats:{Armor:7, Struct:2, EW:5},
        details:[
            {h:'[KC 장갑] (패시브)', t:'이 메카가 공격받을 시, 이 부품의 충전됨 토큰을 소모하여 [번개]를 [방어]로 취급할 수 있습니다.'},
            {h:'[조작 간섭] (전술 액션)', t:'전자 공격(무소음). 사거리 내 적 메카/드론 하나에게 전자전 굴림 수행. 성공 시 [이동 불가] 토큰 1개 부여.'}
        ]
    },
    { 
        id:'un_viper', type:'unit', cat:'UN', title:'TM39 "Viper"', sub:'Torso / Cost: 63', color:'un',
        stats:{Armor:5, Struct:1, EW:4},
        details:[
            {h:'[매복] (쾌속 액션)', t:'무소음. 이 메카는 [개피탐] 토큰을 획득합니다.'},
            {h:'[다중스펙트럼 추적] (패시브)', t:'이 유닛의 사격 액션은 적의 개피탐 효과를 무시합니다.'}
        ]
    },
    { 
        id:'un_octopus', type:'unit', cat:'UN', title:'TM641 "Octopus"', sub:'Torso / Cost: 81', color:'un',
        stats:{Armor:4, Struct:1, EW:5},
        details:[
            {h:'[매복] (쾌속 액션)', t:'무소음. 이 메카는 [개피탐] 토큰을 획득합니다.'},
            {h:'[광학 위장] (전술 액션)', t:'무소음. 광학 위장을 활성화합니다. (은폐 2)'},
            {h:'[은폐 2]', t:'위장 해제 시 2그리드 이내에 등장해야 합니다.'}
        ]
    },
    { 
        id:'un_wildcat', type:'unit', cat:'UN', title:'TM310 "Wildcat"', sub:'Torso / Cost: 63', color:'un',
        stats:{Armor:4, Struct:4, EW:4},
        details:[
            {h:'[조정 감시] (패시브)', t:'아군 유닛 사격 시 대상이 시야 내에 있으면 재굴림 가능.'},
            {h:'[KN 데이터 링크] (패시브)', t:'커맨드 페이즈 때 커맨드 토큰 2개를 생성합니다.'}
        ]
    },

    // ==========================================
    // 2. 섀시 (Chassis)
    // ==========================================
    { 
        id:'un_chassis_std', type:'unit', cat:'UN', title:'LM231 Standard Chassis', sub:'Chassis / Cost: 27', color:'un',
        stats:{Move:1},
        details:[{h:'[스프린트] (이동 액션)', t:'기본 이동 액션을 수행합니다.'}]
    },
    { 
        id:'un_chassis_stealth', type:'unit', cat:'UN', title:'LM210S Stealth Chassis', sub:'Chassis / Cost: 39', color:'un',
        stats:{Move:1},
        details:[
            {h:'[스프린트] (이동 액션)', t:'기본 이동 액션을 수행합니다.'},
            {h:'[은폐 이동] (패시브)', t:'이 부품의 모든 이동 액션과 기동은 [무소음]을 지닙니다.'}
        ]
    },
    { 
        id:'un_chassis_combat', type:'unit', cat:'UN', title:'LM213B Combat Chassis', sub:'Chassis / Cost: 57', color:'un',
        stats:{Move:1},
        details:[
            {h:'[스프린트] (이동 액션)', t:'기본 이동 액션을 수행합니다.'},
            {h:'[발차기] (근접 액션)', t:'대상 메카의 [섀시]를 지정해 공격할 수 있습니다.'}
        ]
    },

    // ==========================================
    // 3. 무기 (Arms) - 오른팔/왼팔 공용
    // ==========================================
    { 
        id:'un_shotgun_bunker', type:'unit', cat:'UN', title:'G6 Shotgun + M5 Pile Bunker', sub:'Arm / Cost: 69', color:'un',
        details:[
            {h:'[단발 사격] (사격)', t:'레이저 무기, 산탄, 근접 사격. 명중 시 [취약] 부여.'},
            {h:'[꿰뚫기] (근접)', t:'파열 (연쇄 데미지가 구조에 적용).'}
        ]
    },
    { 
        id:'un_ion_shotgun', type:'unit', cat:'UN', title:'IGX350 Ion Shotgun', sub:'Arm / Cost: 45', color:'un',
        details:[
            {h:'[단발 사격] (사격)', t:'산탄, 이온 무기, 근접 사격. [충전됨] 시 파열 획득.'},
            {h:'[이온 무기]', t:'취약 토큰을 지닌 대상 공격 시 [번개]를 [강공격]으로 취급.'}
        ]
    },
    { 
        id:'un_heavy_ion', type:'unit', cat:'UN', title:'IGX920 Heavy Ion Gun', sub:'Arm / Cost: 60', color:'un',
        details:[
            {h:'[단발 사격] (사격)', t:'이온 무기. [양손] 시 [저격] 획득. [충전됨] 시 파열 획득.'},
            {h:'[저격]', t:'공격 시 피격 부품을 지정할 수 있습니다.'}
        ]
    },
    { 
        id:'un_vibroblade_grenade', type:'unit', cat:'UN', title:'M4 Vibroblade + Grenade Pod', sub:'Arm / Cost: 54', color:'un',
        details:[
            {h:'[유탄] (발사)', t:'일제발사3, 곡사. M7 유탄 1개 발사.'},
            {h:'[내려치기] (근접)', t:'기본 근접 공격.'}
        ]
    },
    { 
        id:'un_katana', type:'unit', cat:'UN', title:'M15B0 "Katana"', sub:'Arm / Cost: 81', color:'un',
        details:[
            {h:'[내려치기] (근접)', t:'이 공격으로 부품 파괴 시, 즉시 [가르기] 수행 가능.'},
            {h:'[가르기] (근접)', t:'[양손] 사용 시 파열 획득.'}
        ]
    },
    { 
        id:'un_fairy_smg', type:'unit', cat:'UN', title:'MDXS "Fairy" + R6 SMG', sub:'Arm / Cost: 45', color:'un',
        details:[
            {h:'[완전-자동] (사격)', t:'레이저 무기. [부동] 시 노랑 주사위 1개 추가.'},
            {h:'[추진기] (패시브)', t:'양팔에 이 부품 장비 시 이동을 [비행 이동]으로 취급.'}
        ]
    },
    { 
        id:'un_sniper', type:'unit', cat:'UN', title:'R33 Sniper Rifle', sub:'Arm / Cost: 39', color:'un',
        details:[
            {h:'[단발 사격] (사격)', t:'레이저 무기. [부동] 시 [저격] 획득.'}
        ]
    },
    { 
        id:'un_r6_smg', type:'unit', cat:'UN', title:'R6 SMG', sub:'Arm / Cost: 54', color:'un',
        details:[
            {h:'[점발 사격] (사격)', t:'레이저 무기. [양손] 시 사거리 2그리드 추가.'},
            {h:'[완전-자동] (사격)', t:'레이저 무기. [부동] 시 노랑 주사위 1개 추가.'}
        ]
    },
    { 
        id:'un_r6sd_smg', type:'unit', cat:'UN', title:'R6SD SMG (Silenced)', sub:'Arm / Cost: 60', color:'un',
        details:[
            {h:'[무소음 점발/완전-자동]', t:'무소음. 레이저 무기. [양손]/[부동] 보너스 동일.'}
        ]
    },
    { 
        id:'un_auto_rifle', type:'unit', cat:'UN', title:'R7 Automatic Rifle', sub:'Arm / Cost: 42', color:'un',
        details:[
            {h:'[단발 사격] (사격)', t:'레이저 무기. [양손] 시 사거리 2그리드 추가.'}
        ]
    },
    { 
        id:'un_tac_rifle', type:'unit', cat:'UN', title:'R9B Tactical Rifle', sub:'Arm / Cost: 48', color:'un',
        details:[
            {h:'[무소음 단발 사격]', t:'무소음. 레이저 무기. [양손] 시 사거리 2그리드 추가.'}
        ]
    },
    { 
        id:'un_pistol_blade', type:'unit', cat:'UN', title:'RH21 Pistol + Vibroblade', sub:'Arm / Cost: 45', color:'un',
        details:[
            {h:'[점발 사격] (사격)', t:'전방향 사격 (전방 제한 없음).'},
            {h:'[내려치기] (근접)', t:'기본 근접 공격.'}
        ]
    },
    { 
        id:'un_rainstorm', type:'unit', cat:'UN', title:'RHX23 "Rainstorm"', sub:'Arm / Cost: 57', color:'un',
        details:[
            {h:'[점발 사격]', t:'전방향 사격.'},
            {h:'[완전-자동]', t:'[제압]: 대상은 즉시 방어 스탠스로 전환 (셧다운 제외).'}
        ]
    },
    { 
        id:'un_shield_smg', type:'unit', cat:'UN', title:'S100 Shield + R6SS SMG', sub:'Arm / Cost: 63', color:'un',
        details:[
            {h:'[완전-자동] (사격)', t:'레이저 무기. [부동] 시 노랑 주사위 1개 추가.'},
            {h:'[기동 방어] (패시브)', t:'이 메카는 이 부품을 피격 부품으로 지정할 수 있습니다.'}
        ]
    },
    { 
        id:'un_nailgun', type:'unit', cat:'UN', title:'K9 Nail Gun + Wakizashi', sub:'Arm / Cost: 42', color:'un',
        details:[
            {h:'[타정] (사격)', t:'무소음. [명중] 시 대상 링크 1 감소.'},
            {h:'[찌르기] (근접)', t:'무소음.'}
        ]
    },
    { 
        id:'un_missile_pod', type:'unit', cat:'UN', title:'RKG70 Missile Pod', sub:'Arm / Cost: 42', color:'un',
        details:[
            {h:'[미사일] (발사)', t:'직사. RKG70 미사일 다발 1개 발사. [양손] 시 미디움 액션으로 간주.'}
        ]
    },
    { 
        id:'un_shield_grenade', type:'unit', cat:'UN', title:'S100 Shield + Grenade Pod', sub:'Arm / Cost: 66', color:'un',
        details:[
            {h:'[유탄] (발사)', t:'일제발사3, 곡사. M7 유탄 1개 발사.'},
            {h:'[기동 방어] (패시브)', t:'이 부품을 피격 부품으로 지정 가능.'}
        ]
    },
    { 
        id:'un_meteor_shield', type:'unit', cat:'UN', title:'S9 "Meteor" Shield + Pile Bunker', sub:'Arm / Cost: 57', color:'un',
        details:[
            {h:'[방패 치기] (근접)', t:'[충격]: 번개 1개당 대상 링크 1 감소.'},
            {h:'[꿰뚫기] (근접)', t:'파열.'}
        ]
    },
    { 
        id:'un_whip', type:'unit', cat:'UN', title:'MX82 Multifunctional Whip', sub:'Arm / Cost: 48', color:'un',
        details:[
            {h:'[휘갈기기] (근접)', t:'[명중] 시 대상을 끌어당기거나 [이동 불가] 토큰 부여.'},
            {h:'[채찍질] (근접)', t:'[명중] 시 대상의 전방을 설정.'}
        ]
    },

    // ==========================================
    // 4. 백팩 (Backpack)
    // ==========================================
    { 
        id:'un_delphinium', type:'unit', cat:'UN', title:'AMDS210 "Delphinium" Carrier', sub:'Backpack / Cost: 30', color:'un',
        details:[{h:'[델피니움 설치]', t:'AMDS210 자동 방어 시스템 1개 설치.'}]
    },
    { 
        id:'un_cooler', type:'unit', cat:'UN', title:'CSC60 Cooler', sub:'Backpack / Cost: 27', color:'un',
        details:[{h:'[냉각] (패시브)', t:'레이저 무기로 사격 시, 노랑 주사위 1개 추가.'}]
    },
    { 
        id:'un_turtle_rack', type:'unit', cat:'UN', title:'DBP "Turtle Shell" Rack', sub:'Backpack / Cost: 39', color:'un',
        details:[{h:'[터틀쉘 설치]', t:'DBP 터틀쉘 바리케이드 1개 설치.'}]
    },
    { 
        id:'un_armor_charger', type:'unit', cat:'UN', title:'EBS/X40 Armor Energy Charger', sub:'Backpack / Cost: 39', color:'un',
        details:[{h:'[KC 장갑] (패시브)', t:'피격 시 [충전됨] 토큰을 소모하여 [번개]를 [방어]로 취급.'}]
    },
    { 
        id:'un_ew_pod', type:'unit', cat:'UN', title:'EC50 EW Pod', sub:'Backpack / Cost: 42', color:'un',
        details:[
            {h:'[사격 통제 간섭] (쾌속)', t:'전자 공격. 성공 시 [사격 통제 방해] 토큰 부여.'},
            {h:'[사격 통제 방해]', t:'사격 및 요격 불가.'}
        ]
    },
    { 
        id:'un_mine_rack', type:'unit', cat:'UN', title:'GSD2A "Pholcus" Mine Rack', sub:'Backpack / Cost: 21', color:'un',
        details:[{h:'[유령거미] (발사)', t:'곡사, 투척, 무소음. 폴커스 자동 지뢰 발사.'}]
    },
    { 
        id:'un_jetpack', type:'unit', cat:'UN', title:'JP1 Jetpack', sub:'Backpack / Cost: 57', color:'un',
        details:[{h:'[장거리 도약] (이동)', t:'공중 이동 (비행 이동 간주). 화물 운반 불가.'}]
    },
    { 
        id:'un_stabilizer', type:'unit', cat:'UN', title:'MSH2 Stabilizer Arm', sub:'Backpack / Cost: 24', color:'un',
        details:[{h:'[동적 평형] (패시브)', t:'[양손] 사격 보조 시 [전방향 사격] 획득.'}]
    },
    { 
        id:'un_overload', type:'unit', cat:'UN', title:'OGSP05 Overloading Pack', sub:'Backpack / Cost: 49', color:'un',
        details:[{h:'[과부하] (패시브)', t:'액션 기회 중 링크를 최대 2개 소모하여 액션 틱 획득.'}]
    },
    { 
        id:'un_ammo_pack', type:'unit', cat:'UN', title:'RKG70 Ammunition Pack', sub:'Backpack / Cost: 21', color:'un',
        details:[
            {h:'[송탄]', t:'RKG70 미사일 발사 시 이 부품의 탄약 소모 가능.'},
            {h:'[탄약 보급] (전술)', t:'인접 아군에게 미사일 1개 재보급.'}
        ]
    },
    { 
        id:'un_mobility_pack', type:'unit', cat:'UN', title:'JP5 Mobility Pack', sub:'Backpack / Cost: 60', color:'un',
        details:[{h:'[속행] (패시브)', t:'이 메카의 기동력 수치 +1.'}]
    },

    // ==========================================
    // 5. 드론, 설치물, 발사체 (Drones & Others)
    // ==========================================
    { 
        id:'un_m7', type:'unit', cat:'UN', title:'M7 Grenade', sub:'Projectile', color:'un',
        details:[{h:'[폭파]', t:'즉시 폭파. 그리드 내 모든 유닛에게 폭발 데미지.'}]
    },
    { 
        id:'un_m9', type:'unit', cat:'UN', title:'M9 Stun Grenade', sub:'Projectile', color:'un',
        details:[{h:'[폭파]', t:'폭파 시 사거리 내 모든 유닛에게 [사격 통제 방해] 부여.'}]
    },
    { 
        id:'un_rkg70', type:'unit', cat:'UN', title:'RKG70 Missile Group', sub:'Projectile', color:'un',
        details:[{h:'[유도 공격]', t:'대상을 추적하여 폭파. 미사일 다발 3.'}]
    },
    { 
        id:'un_turtle', type:'unit', cat:'UN', title:'DBP "Turtle Shell" Barricade', sub:'Deployable', color:'un',
        details:[{h:'[바리케이드]', t:'이 유닛은 분쇄되지 않음. 아군에게 3인치 지형(커버) 제공.'}]
    },
    { 
        id:'un_pholcus', type:'unit', cat:'UN', title:'SGM2 "Pholcus" Mine', sub:'Deployable', color:'un',
        details:[{h:'[자동 공격]', t:'사거리 내 적 유닛에게 도약하여 자폭.'}]
    },
    { 
        id:'un_delphinium_ads', type:'unit', cat:'UN', title:'AMDS210 "Delphinium" ADS', sub:'Drone / Cost: 42', color:'un',
        details:[{h:'[사격 통제 간섭]', t:'오토마톤. 가장 가까운 적에게 전자전 공격.'}]
    },
    { 
        id:'un_porcupine_ciws', type:'unit', cat:'UN', title:'ADK15D "Porcupine" CIWS', sub:'Drone / Cost: 48', color:'un',
        details:[{h:'[요격 3]', t:'오토마톤. 완전-자동 사격. 요격 토큰 3개 보유.'}]
    },
    { 
        id:'un_porcupine_micro', type:'unit', cat:'UN', title:'ADK15/MAS "Porcupine" Microwave', sub:'Drone / Cost: 24', color:'un',
        details:[{h:'[극초단파]', t:'공격 시 모든 [번개]마다 대상에게 [사격 통제 방해] 부여.'}]
    },
    { 
        id:'un_porcupine_ion', type:'unit', cat:'UN', title:'ADK15P "Porcupine" Ion', sub:'Drone / Cost: 70', color:'un',
        details:[{h:'[충전]', t:'충전됨 토큰 획득. 공격 시 소모하여 파열 획득.'}]
    },
    { 
        id:'un_tarantula_fire', type:'unit', cat:'UN', title:'ADK30F "Tarantula" Firepower', sub:'Drone / Cost: 30', color:'un',
        details:[{h:'[요격 1]', t:'오토마톤. 완전-자동 사격. 요격 토큰 1개 보유.'}]
    },
    { 
        id:'un_tarantula_carrier', type:'unit', cat:'UN', title:'ADK30C "Tarantula" Carrier', sub:'Drone / Cost: 12', color:'un',
        details:[{h:'[화물]', t:'백팩 1개를 화물로 운반. 접촉한 아군 메카가 자신의 부품처럼 사용 가능.'}]
    },
    { 
        id:'un_raven_scout', type:'unit', cat:'UN', title:'ADK60R "Raven" Scout', sub:'Drone / Cost: 8', color:'un',
        details:[{h:'[조기 경보 감시]', t:'아군이 공격받을 때, 공격자가 시야에 있으면 방어 주사위 +1 (파랑).'}]
    },
    { 
        id:'un_raven_inter', type:'unit', cat:'UN', title:'ADK60S "Raven" Interference', sub:'Drone / Cost: 51', color:'un',
        details:[{h:'[사격 통제 간섭]', t:'오토마톤. 가장 가까운 적에게 전자전 공격.'}]
    },

    // ==========================================
    // 6. 파일럿 (Pilots)
    // ==========================================
    { 
        id:'un_pilot_quartz', type:'unit', cat:'UN', title:'Quartz (쿼츠)', sub:'Pilot / Cost: 24', color:'un',
        details:[{h:'[침착함]', t:'매 라운드 종료 시 링크 1 회복.'}]
    },
    { 
        id:'un_pilot_panzer', type:'unit', cat:'UN', title:'Panzer (판저)', sub:'Pilot / Cost: 15', color:'un',
        details:[{h:'[저지]', t:'적 유닛이 락온 해제(이탈) 시 이동력 1 추가 소모 또는 링크 1 소모 강제.'}]
    },
    { 
        id:'un_pilot_firefly', type:'unit', cat:'UN', title:'Firefly (파이어플라이)', sub:'Pilot / Cost: 18', color:'un',
        details:[{h:'[무혼]', t:'이동 시 광학 위장/개피탐 상태라면 다른 유닛을 통과하여 이동 가능.'}]
    },
    { 
        id:'un_pilot_yoyu', type:'unit', cat:'UN', title:'Yoyu (요유)', sub:'Pilot / Cost: 21', color:'un',
        details:[{h:'[도발]', t:'전자전 성공 시, 대상 메카를 [공격 스탠스]로 강제 변경 가능.'}]
    },
    { 
        id:'un_pilot_onyx', type:'unit', cat:'UN', title:'Onyx (오닉스)', sub:'Pilot / Cost: 27', color:'un',
        details:[{h:'[완고한]', t:'탑승 메카는 대형 유닛을 상대로도 [분쇄] 가능.'}]
    },
    { 
        id:'un_pilot_sealock', type:'unit', cat:'UN', title:'Sealock (시락)', sub:'Pilot / Cost: 21', color:'un',
        details:[{h:'[추격]', t:'[취약] 토큰을 지닌 대상 공격 시, 모든 눈을 [강공격]으로 교체 가능.'}]
    }
];
