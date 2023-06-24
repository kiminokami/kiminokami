const ap = new APlayer
    ({
        container: document.getElementById('aplayer'),
        showlrc: true,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        autoplay: true,
        volume: 1.0,
        fixed: true,
        lrcType: 3,
        audio: [
        	{
                name: 'ラブレター',
                artist: 'YOASOBI',
                url: '/audio/YOASOBI-ラブレター.flac',
                cover: '/audio/img/ラブレター.png',
                lrc: '/audio/YOASOBI-ラブレター.lrc'
        	},
            {
                name: 'もう少しだけ',
                artist: 'YOASOBI',
                url: '/audio/YOASOBI-もう少しだけ.flac',
                cover: '/audio/img/もう少しだけ.png',
                lrc: '/audio/もう少しだけ.lrc'
            },
            {
                name: '群青',
                artist: 'YOASOBI',
                url: '/audio/YOASOBI-群青.flac',
                cover: '/audio/img/群青.png',
                lrc: '/audio/YOASOBI-群青.lrc'
            },
            {
                name: '萤之森',
                artist: '王子健',
                url: '/audio/王子健-萤之森.flac',
                cover: '/audio/img/萤之森.png',
                lrc: '/audio/王子健-萤之森.lrc'
            },
            {
                name: '恋音と雨空',
                artist: 'Lefty hand cream',
                url: '/audio/Lefty hand cream-恋音と雨空.mp3',
                cover: '/audio/img/恋音と雨空.png',
                lrc: '/audio/Lefty hand cream-恋音と雨空.lrc'
            },
            {
                name: '心做し(カバー)',
                artist: 'majiko',
                url: '/audio/majiko-心做し(カバー).flac',
                cover: '/audio/img/心做し.png',
                lrc: '/audio/majiko-心做し(カバー).lrc'
            },
            {
                name: '绊 (羁绊)',
                artist: 'miu-clips',
                url: '/audio/miu-clips - 绊 (羁绊) .mp3',
                cover: '/audio/img/绊.png',
                lrc: '/audio/miu-clips - 绊 (羁绊).lrc'
            },
            {
                name: 'すずめ feat.十明',
                artist: 'RADWIMPS&十明',
                url: '/audio/RADWIMPS&十明-すずめ feat.十明.flac',
                cover: '/audio/img/すずめ.png',
                lrc: '/audio/RADWIMPS&十明-すずめ feat.十明.lrc'
            },
            {
                name: '愛にできることはまだあるかい',
                artist: 'RADWIMPS',
                url: '/audio/RADWIMPS-愛にできることはまだあるかい.flac',
                cover: '/audio/img/愛にできることはまだあるかい.png',
                lrc: '/audio/RADWIMPS-愛にできることはまだあるかい.lrc'
            },
            {
                name: '三葉のテーマ',
                artist: 'RADWIMPS',
                url: '/audio/RADWIMPS-三葉のテーマ.flac',
                cover: '/audio/img/三葉のテーマ.png',
                lrc: '/audio/RADWIMPS-三葉のテーマ.lrc'
            },
            {
                name: 'Häschenparty (Album Version)',
                artist: 'Schnuffel',
                url: '/audio/Schnuffel-Häschenparty(Album Version).flac',
                cover: '/audio/img/Häschenparty.png',
                lrc: '/audio/Schnuffel-Häschenparty(Album Version).lrc'
            },
            {
                name: 'unravel(n-buna from ヨルシカ Remix)',
                artist: 'TK from 凛として時雨',
                url: '/audio/TK from 凛として時雨-unravel(n-buna from ヨルシカ Remix).flac',
                cover: '/audio/img/unravel.png',
                lrc: '/audio/TK from 凛として時雨-unravel(n-buna from ヨルシカ Remix).lrc'
            },
            {
                name: '花の塔',
                artist: 'さユり',
                url: '/audio/さユり-花の塔.mp3',
                cover: '/audio/img/花の塔.png',
                lrc: '/audio/さユり-花の塔.lrc'
            },
            {
                name: '鏡花水月',
                artist: 'まふまふ',
                url: '/audio/まふまふ-鏡花水月.flac',
                cover: '/audio/img/鏡花水月.png',
                lrc: '/audio/まふまふ-鏡花水月.lrc'
            },
            {
                name: '你瞒我瞒',
                artist: '陈柏宇',
                url: '/audio/陈柏宇-你瞒我瞒.flac',
                cover: '/audio/img/你瞒我瞒.png',
                lrc: '/audio/陈柏宇-你瞒我瞒.lrc'
            },
            {
                name: '願い～あの頃のキミへ～',
                artist: '當山みれい',
                url: '/audio/當山みれい-願い～あの頃のキミへ～.mp3',
                cover: '/audio/img/願い～あの頃のキミへ～.png',
                lrc: '/audio/當山みれい-願い～あの頃のキミへ～.lrc'
            },
            {
                name: 'Summer(PIANO VER.)',
                artist: '久石让',
                url: '/audio/久石让-Summer(PIANO VER.).flac',
                cover: '/audio/img/Summer.png',
                lrc: '/audio/久石让-Summer(PIANO VER.).lrc'
            },
            {
                name: '想自由',
                artist: '林宥嘉',
                url: '/audio/林宥嘉-想自由.flac',
                cover: '/audio/img/想自由.png',
                lrc: '/audio/想自由.lrc'
            },
            {
                name: '飞鸟和蝉',
                artist: '鹿乃',
                url: '/audio/鹿乃 - 飞鸟和蝉.mp3',
                cover: '/audio/img/飞鸟和蝉.png',
                lrc: '/audio/鹿乃 - 飞鸟和蝉.lrc'
            },
            {
                name: 'Decide',
                artist: '鹿乃',
                url: '/audio/鹿乃-Decide.flac',
                cover: '/audio/img/Decide.png',
                lrc: '/audio/鹿乃-Decide.lrc'
            },
            {
                name: 'それはきっと夏だった',
                artist: '鹿乃',
                url: '/audio/鹿乃-それはきっと夏だった.flac',
                cover: '/audio/img/それはきっと夏だった.png',
                lrc: '/audio/鹿乃-それはきっと夏だった.lrc'
            },
            {
                name: 'なだめスかし Negotiation',
                artist: '鹿乃',
                url: '/audio/鹿乃-なだめスかし Negotiation.flac',
                cover: '/audio/img/Negotiation.png',
                lrc: '/audio/鹿乃-なだめスかし Negotiation.lrc'
            },
            {
                name: 'ハロ、ハワユ',
                artist: '鹿乃',
                url: '/audio/鹿乃-ハロ、ハワユ.flac',
                cover: '/audio/img/ハロ、ハワユ.png',
                lrc: '/audio/鹿乃-ハロ、ハワユ.lrc'
            },
            {
                name: 'メリーメリー 歌いました',
                artist: '鹿乃',
                url: '/audio/鹿乃-メリーメリー 歌いました.flac',
                cover: '/audio/img/メリーメリ.png',
                lrc: '/audio/鹿乃-メリーメリー 歌いました.lrc'
            },
            {
                name: '处处吻(日语版)',
                artist: '鹿乃',
                url: '/audio/鹿乃-处处吻(日语版).mp3',
                cover: '/audio/img/处处吻.png',
                lrc: '/audio/鹿乃-处处吻(日语版).lrc'
            },
            {
                name: '那些花儿',
                artist: '鹿乃',
                url: '/audio/鹿乃-那些花儿.mp3',
                cover: '/audio/img/那些花儿.png',
                lrc: '/audio/鹿乃-那些花儿.lrc'
            },
            {
                name: '天ノ弱',
                artist: '鹿乃',
                url: '/audio/鹿乃-天ノ弱.flac',
                cover: '/audio/img/天ノ弱.png',
                lrc: '/audio/鹿乃-天ノ弱.lrc'
            },
            {
                name: '心拍数#0822',
                artist: '鹿乃',
                url: '/audio/鹿乃-心拍数.flac',
                cover: '/audio/img/心拍数.png',
                lrc: '/audio/鹿乃-心拍数.lrc'
            },
            {
                name: '雨き声残響 (雨声回响)',
                artist: '鹿乃',
                url: '/audio/鹿乃-雨き声残響 (雨声回响).mp3',
                cover: '/audio/img/雨き声残響.png',
                lrc: '/audio/鹿乃-雨き声残響 (雨声回响).lrc'
            },
            {
                name: '祝我生日快乐',
                artist: '鹿乃',
                url: '/audio/鹿乃-祝我生日快乐.flac',
                cover: '/audio/img/祝我生日快乐.png',
                lrc: '/audio/鹿乃-祝我生日快乐.lrc'
            },
            {
                name: '言葉のいらない約束',
                artist: '鎖那',
                url: '/audio/鎖那-言葉のいらない約束.flac',
                cover: '/audio/img/言葉のいらない約束.png',
                lrc: '/audio/鎖那-言葉のいらない約束.lrc'
            },
            {
                name: 'Sincerely',
                artist: '唐沢美帆',
                url: '/audio/唐沢美帆-Sincerely.flac',
                cover: '/audio/img/Sincerely.png',
                lrc: '/audio/唐沢美帆-Sincerely.lrc'
            },
            {
                name: '爱过你这件事',
                artist: '西柚',
                url: '/audio/西柚-爱过你这件事.flac',
                cover: '/audio/img/爱过你这件事.png',
                lrc: '/audio/西柚-爱过你这件事.lrc'
            },
            {
                name: '身骑白马',
                artist: '徐佳莹',
                url: '/audio/徐佳莹-身骑白马.flac',
                cover: '/audio/img/身骑白马.png',
                lrc: '/audio/徐佳莹-身骑白马.lrc'
            },
            {
                name: '春之语',
                artist: '盐果菌',
                url: '/audio/盐果菌 - 春之语.mp3',
                cover: '/audio/img/春之语.png',
                lrc: '/audio/盐果菌 - 春之语.lrc'
            },
            {
                name: '地平線の向こうへ',
                artist: '照井春佳&三森すずこ&内山夕実&黒沢ともよ&長妻樹里&花澤香菜',
                url: '/audio/照井春佳&三森すずこ&内山夕実&黒沢ともよ&長妻樹里&花澤香菜-地平線の向こうへ.flac',
                cover: '/audio/img/地平線の向こうへ.png',
                lrc: '/audio/照井春佳&三森すずこ&内山夕実&黒沢ともよ&長妻樹里&花澤香菜-地平線の向こうへ.lrc'
            },
            {
                name: '50センチ',
                artist: '中村カンナ',
                url: '/audio/中村カンナ-50センチ.flac',
                cover: '/audio/img/50センチ.png',
                lrc: '/audio/中村カンナ-50センチ.lrc'
            },
            {
                name: '安静',
                artist: '周杰伦',
                url: '/audio/周杰伦-安静.flac',
                cover: '/audio/img/安静.png',
                lrc: '/audio/周杰伦-安静.lrc'
            },
            {
                name: '珊瑚海',
                artist: '周杰伦&梁心颐-珊瑚海',
                url: '/audio/周杰伦&梁心颐-珊瑚海.flac',
                cover: '/audio/img/珊瑚海.png',
                lrc: '/audio/周杰伦&梁心颐-珊瑚海.lrc'
            },
            {
                name: '暗号',
                artist: '周杰伦',
                url: '/audio/周杰伦-暗号.flac',
                cover: '/audio/img/暗号.png',
                lrc: '/audio/周杰伦-暗号.lrc'
            },
            {
                name: '半岛铁盒',
                artist: '周杰伦',
                url: '/audio/周杰伦-半岛铁盒.flac',
                cover: '/audio/img/半岛铁盒.png',
                lrc: '/audio/周杰伦-半岛铁盒.lrc'
            },
            {
                name: '手写的从前',
                artist: '周杰伦',
                url: '/audio/周杰伦-手写的从前.flac',
                cover: '/audio/img/手写的从前.png',
                lrc: '/audio/周杰伦-手写的从前.lrc'
            },
            {
                name: '菊花台',
                artist: '周杰伦',
                url: '/audio/周杰伦-菊花台.flac',
                cover: '/audio/img/菊花台.png',
                lrc: '/audio/周杰伦-菊花台.lrc'
            },
            {
                name: '兰亭序',
                artist: '周杰伦',
                url: '/audio/周杰伦-兰亭序.flac',
                cover: '/audio/img/兰亭序.png',
                lrc: '/audio/周杰伦-兰亭序.lrc'
            },
            {
                name: '浪漫手机',
                artist: '周杰伦',
                url: '/audio/周杰伦-浪漫手机.flac',
                cover: '/audio/img/浪漫手机.png',
                lrc: '/audio/周杰伦-浪漫手机.lrc'
            },
            {
                name: '蒲公英的约定',
                artist: '周杰伦',
                url: '/audio/周杰伦-蒲公英的约定.flac',
                cover: '/audio/img/蒲公英的约定.png',
                lrc: '/audio/周杰伦-蒲公英的约定.lrc'
            },
            {
                name: '我落泪情绪零碎',
                artist: '周杰伦',
                url: '/audio/周杰伦-我落泪情绪零碎.flac',
                cover: '/audio/img/我落泪情绪零碎.png',
                lrc: '/audio/周杰伦-我落泪情绪零碎.lrc'
            }
            
		]
    });
    ap.init();