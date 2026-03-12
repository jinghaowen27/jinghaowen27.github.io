// ── All modal popup content (recipes, cocktails, books, projects, tarot) ──
// Edit this file to change card popup details.

const MODALS = {
  // RECIPES
  'recipe-charsiu':{
    emoji:'🥩', eyebrowEn:'Cantonese · Main · 4 servings', eyebrowZh:'粤式 · 主菜 · 4人份',
    titleEn:'Char Siu (BBQ Pork)', titleZh:'叉烧肉',
    metaEn:[['Time','2h active + overnight'],['Difficulty','Medium'],['Rating','★★★★☆']],
    metaZh:[['时间','操作2小时 + 隔夜'],['难度','中等'],['评分','★★★★☆']],
    ingrEn:['<strong>600g</strong> pork shoulder','<strong>3 tbsp</strong> hoisin sauce','<strong>2 tbsp</strong> soy sauce','<strong>2 tbsp</strong> honey','<strong>1 tbsp</strong> Shaoxing wine','<strong>1 tsp</strong> five-spice powder','<strong>1 tsp</strong> sesame oil','<strong>2 cloves</strong> garlic, grated','<strong>1 tbsp</strong> red fermented tofu'],
    ingrZh:['<strong>600g</strong> 猪梅花肉','<strong>3汤匙</strong> 海鲜酱','<strong>2汤匙</strong> 生抽','<strong>2汤匙</strong> 蜂蜜','<strong>1汤匙</strong> 绍兴酒','<strong>1茶匙</strong> 五香粉','<strong>1茶匙</strong> 麻油','<strong>2瓣</strong> 大蒜，磨碎','<strong>1汤匙</strong> 南乳'],
    stepsEn:['Mix all marinade ingredients in a bowl. Taste — it should be sweet, savory, and fragrant.','Score the pork shoulder in a crosshatch pattern (5mm deep) to help marinade penetrate.','Coat pork thoroughly in marinade. Refrigerate overnight, or at minimum 6 hours.','Remove from fridge 30 min before cooking. Preheat oven to 200°C.','Place pork on a rack over a foil-lined tray. Roast 25 min, flip, roast another 25 min.','Mix remaining marinade with 1 tbsp honey. Brush on pork. Broil 3–5 min until caramelized and slightly charred.','Rest 10 min before slicing. Serve over rice or in steamed buns.'],
    stepsZh:['将所有腌料混合均匀，尝一口——应该甜咸鲜香兼具。','在猪肉上划十字花刀（深约5mm），帮助腌料渗透。','充分涂抹腌料，冷藏隔夜或至少6小时。','烹饪前30分钟从冰箱取出。预热烤箱至200°C。','猪肉放烤架上，下铺锡纸托盘。烤25分钟，翻面，再烤25分钟。','剩余腌料加1汤匙蜂蜜调匀，刷在猪肉上。用上烧模式烤3-5分钟至焦糖化。','静置10分钟后切片，配米饭或包入蒸包。'],
    notesEn:'The red fermented tofu (南乳) is the secret ingredient — it gives authentic color and a subtle funk. Find it at any Chinese grocery.', notesZh:'南乳是秘密武器——它赋予正宗的色泽和独特的发酵香气。中国超市均可购得。'
  },
  'recipe-dandanmian':{
    emoji:'🍜', eyebrowEn:'Sichuan · Noodles · 2 servings', eyebrowZh:'川味 · 面食 · 2人份',
    titleEn:'Dan Dan Noodles', titleZh:'担担面',
    metaEn:[['Time','30 min'],['Difficulty','Easy–Medium'],['Rating','★★★★★']],
    metaZh:[['时间','30分钟'],['难度','简单-中等'],['评分','★★★★★']],
    ingrEn:['<strong>200g</strong> thin wheat noodles','<strong>150g</strong> ground pork','<strong>3 tbsp</strong> homemade chili oil','<strong>2 tbsp</strong> ya cai (preserved mustard)','<strong>2 tbsp</strong> sesame paste','<strong>1 tbsp</strong> soy sauce','<strong>1 tsp</strong> Sichuan peppercorn oil','<strong>1 tsp</strong> black vinegar','<strong>1 tsp</strong> sugar','<strong>2</strong> spring onions, sliced'],
    ingrZh:['<strong>200g</strong> 细面条','<strong>150g</strong> 猪肉末','<strong>3汤匙</strong> 自制辣椒油','<strong>2汤匙</strong> 宜宾芽菜','<strong>2汤匙</strong> 芝麻酱','<strong>1汤匙</strong> 生抽','<strong>1茶匙</strong> 花椒油','<strong>1茶匙</strong> 镇江醋','<strong>1茶匙</strong> 糖','<strong>2根</strong> 葱，切碎'],
    stepsEn:['Mix sesame paste, soy sauce, Sichuan pepper oil, black vinegar, and sugar in a bowl to make the sauce. Add a little hot noodle water to thin it slightly.','Stir-fry pork in a dry wok over high heat until browned and crispy. Add ya cai and stir-fry 1 more minute. Set aside.','Cook noodles according to packet instructions. Reserve ½ cup cooking water.','Divide sauce between bowls. Add noodles, top with pork-ya cai mixture, chili oil, and spring onions.','Mix everything thoroughly at the table before eating.'],
    stepsZh:['将芝麻酱、生抽、花椒油、醋和糖混合成酱，加少量热面汤稀释至合适浓度。','干锅大火煸炒肉末至焦香，加入芽菜再炒1分钟，盛出备用。','按包装说明煮好面条，留半杯面汤。','酱汁分入碗底，盛入面条，顶上肉末芽菜、辣椒油和葱花。','上桌后充分搅拌均匀再食用。'],
    notesEn:'The chili oil makes or breaks this dish. I make mine by pouring hot oil over dried chilies, Sichuan pepper, star anise, and cinnamon. The ya cai adds essential crunch and tang.', notesZh:'辣椒油是这道菜的灵魂。我的做法是用热油淋在干辣椒、花椒、八角和桂皮上。芽菜提供不可或缺的脆感和酸香。'
  },
  'recipe-redbraise':{
    emoji:'🍲', eyebrowEn:'Chinese · Braised · 4 servings', eyebrowZh:'中式 · 红烧 · 4人份',
    titleEn:'Red-Braised Pork Belly', titleZh:'红烧肉',
    metaEn:[['Time','3h total'],['Difficulty','Easy (time-intensive)'],['Rating','★★★★★']],
    metaZh:[['时间','共3小时'],['难度','简单（耗时）'],['评分','★★★★★']],
    ingrEn:['<strong>800g</strong> pork belly, skin-on','<strong>3 tbsp</strong> rock sugar','<strong>3 tbsp</strong> soy sauce','<strong>2 tbsp</strong> dark soy sauce','<strong>2 tbsp</strong> Shaoxing wine','<strong>3 cups</strong> water','<strong>3</strong> star anise','<strong>1</strong> cinnamon stick','<strong>3</strong> slices fresh ginger','<strong>2</strong> spring onions'],
    ingrZh:['<strong>800g</strong> 带皮五花肉','<strong>3汤匙</strong> 冰糖','<strong>3汤匙</strong> 生抽','<strong>2汤匙</strong> 老抽','<strong>2汤匙</strong> 绍兴酒','<strong>3杯</strong> 水','<strong>3颗</strong> 八角','<strong>1根</strong> 肉桂','<strong>3片</strong> 生姜','<strong>2根</strong> 大葱'],
    stepsEn:['Blanch pork belly in boiling water for 5 min. Drain and cut into 4×4cm cubes.','Heat a wok over medium heat. Add rock sugar — let it melt to an amber caramel without stirring.','Add pork and toss to coat. The caramel will seize; keep stirring.','Add Shaoxing wine, both soy sauces, spices, ginger, and spring onion.','Pour in water to barely cover the pork. Bring to a boil, then reduce to the lowest simmer. Cover.','Braise for 2.5 hours, checking occasionally. The pork should be very tender and the sauce reduced to a glossy glaze.','Remove spices. Increase heat to reduce sauce further if needed. Serve over white rice.'],
    stepsZh:['五花肉冷水下锅，焯水5分钟，捞出切成4×4cm块。','炒锅中火放入冰糖，不要搅拌，待其融化成琥珀色焦糖。','放入五花肉翻拌上色，焦糖会凝固，继续翻炒。','加入绍兴酒、两种酱油、香料、生姜和葱。','加水至刚好没过猪肉，大火烧开，转最小火，盖上锅盖。','焖煮2.5小时，偶尔查看，猪肉应极度软烂，汤汁浓缩为晶亮的酱汁。','取出香料，如需要可大火再次收汁。搭配白米饭食用。'],
    notesEn:"Don't rush the caramel. Don't rush the braise. This is a dish that rewards patience. The fat should be so soft it trembles on the chopstick.", notesZh:'不要急着做焦糖，不要急着焖。这道菜奖励耐心的人。肥肉应该软到在筷子上颤抖。'
  },
  'recipe-solemeu':{
    emoji:'🐟', eyebrowEn:'French · Main · 2 servings', eyebrowZh:'法式 · 主菜 · 2人份',
    titleEn:'Sole Meunière', titleZh:'黄油煎鳎鱼',
    metaEn:[['Time','20 min'],['Difficulty','Easy'],['Rating','★★★★☆']],
    metaZh:[['时间','20分钟'],['难度','简单'],['评分','★★★★☆']],
    ingrEn:['<strong>2</strong> whole sole fillets (or flounder)','<strong>4 tbsp</strong> unsalted butter','<strong>¼ cup</strong> all-purpose flour','<strong>2 tbsp</strong> capers (optional)','<strong>1</strong> lemon, juiced','<strong>2 tbsp</strong> flat-leaf parsley, chopped','Salt and white pepper'],
    ingrZh:['<strong>2片</strong> 鳎鱼柳（或比目鱼）','<strong>4汤匙</strong> 无盐黄油','<strong>¼杯</strong> 面粉','<strong>2汤匙</strong> 刺山柑（可选）','<strong>1颗</strong> 柠檬，取汁','<strong>2汤匙</strong> 意大利香芹，切碎','盐和白胡椒'],
    stepsEn:['Pat fish fillets completely dry with paper towels. Season with salt and white pepper.','Dredge fish lightly in flour, shaking off excess.','Heat 2 tbsp butter in a large pan over medium-high heat until foaming. Cook fish 2–3 min per side until golden. Remove and keep warm.','In same pan, add remaining butter. Cook over medium heat, swirling, until it turns nut-brown and smells nutty (beurre noisette).','Add lemon juice — it will foam dramatically. Add capers and parsley.','Pour sauce immediately over fish. Serve at once — this waits for no one.'],
    stepsZh:['用厨房纸将鱼柳完全拍干，两面撒盐和白胡椒调味。','轻薄地裹上面粉，抖掉多余的。','大平底锅中火融化2汤匙黄油至起泡，放入鱼柳每面煎2-3分钟至金黄。取出保温。','同一口锅加入剩余黄油，中火不停晃锅，至黄油变成坚果棕色（榛子黄油）。','加入柠檬汁——会剧烈冒泡。加入刺山柑和香芹。','立即将酱汁淋在鱼上。马上上桌——这道菜不等人。'],
    notesEn:"The secret is the beurre noisette — brown the butter until it smells of hazelnuts, then stop immediately. Serve the instant you pour the sauce.", notesZh:'秘诀在于榛子黄油——将黄油焦化至散发榛子香气，立刻停止。淋上酱汁后即刻上桌。'
  },
  'recipe-matchacheese':{
    emoji:'🍰', eyebrowEn:'Fusion · Dessert · 8 slices', eyebrowZh:'创意 · 甜点 · 8片',
    titleEn:'Matcha Basque Cheesecake', titleZh:'抹茶巴斯克芝士蛋糕',
    metaEn:[['Time','1h total'],['Difficulty','Easy'],['Rating','★★★★★']],
    metaZh:[['时间','共1小时'],['难度','简单'],['评分','★★★★★']],
    ingrEn:['<strong>600g</strong> cream cheese, room temp','<strong>200g</strong> caster sugar','<strong>4</strong> large eggs','<strong>250ml</strong> heavy cream','<strong>3 tbsp</strong> high-quality matcha powder','<strong>2 tbsp</strong> all-purpose flour','<strong>1 tsp</strong> vanilla extract','Pinch of salt'],
    ingrZh:['<strong>600g</strong> 奶油奶酪，室温','<strong>200g</strong> 细砂糖','<strong>4颗</strong> 大鸡蛋','<strong>250ml</strong> 淡奶油','<strong>3汤匙</strong> 优质抹茶粉','<strong>2汤匙</strong> 面粉','<strong>1茶匙</strong> 香草精','一撮盐'],
    stepsEn:['Preheat oven to 220°C (fan). Line a 20cm springform tin with parchment paper — let it hang over the sides.','Beat cream cheese and sugar until smooth. Add eggs one at a time.','Whisk matcha with a little cream until smooth paste, then add remaining cream. Pour into batter.','Add flour, vanilla, and salt. Mix until just combined — do not overwork.','Pour into tin. Bake 25–28 min. The center should still wobble significantly.','Cool to room temperature, then refrigerate at least 4 hours. The burnt top is the signature.'],
    stepsZh:['烤箱预热至220°C（风扇模式）。20cm活底蛋糕模铺烘焙纸，让纸超出模具边缘。','奶油奶酪和砂糖打至顺滑，逐个加入鸡蛋搅匀。','将抹茶粉与少量淡奶油调成顺滑的抹茶糊，再倒入剩余淡奶油，混入面糊中。','加入面粉、香草精和盐，混合至刚好融合，不要过度搅拌。','倒入模具，烘烤25-28分钟，中心应仍有明显的晃动感。','冷却至室温后冷藏至少4小时。烤焦的表面是这款蛋糕的标志。'],
    notesEn:"Use ceremonial-grade matcha if possible — it makes a visible difference in color and flavor. The wobbly center will set in the fridge to a perfect custardy texture.", notesZh:'尽量使用仪式级抹茶粉——颜色和味道会有明显提升。晃动的中心在冷藏后会凝固成完美的布丁质感。'
  },
  'recipe-ramen':{
    emoji:'🫕', eyebrowEn:'Japanese · Soup · 4 servings', eyebrowZh:'日式 · 汤品 · 4人份',
    titleEn:'Tonkotsu Ramen (from scratch)', titleZh:'豚骨拉面（从零开始）',
    metaEn:[['Time','14h total'],['Difficulty','Advanced'],['Rating','★★★★★']],
    metaZh:[['时间','共14小时'],['难度','高级'],['评分','★★★★★']],
    ingrEn:['<strong>2kg</strong> pork trotters + neck bones','<strong>500g</strong> pork belly (for chashu)','<strong>4</strong> soft-boiled eggs (marinated)','<strong>200ml</strong> soy sauce (for tare)','<strong>100ml</strong> mirin','<strong>4 portions</strong> fresh ramen noodles','Nori, bamboo shoots, spring onion'],
    ingrZh:['<strong>2kg</strong> 猪蹄 + 颈骨','<strong>500g</strong> 五花肉（做叉烧）','<strong>4颗</strong> 溏心腌蛋','<strong>200ml</strong> 酱油（做酱汁）','<strong>100ml</strong> 味醂','<strong>4份</strong> 新鲜拉面','海苔、笋干、葱花'],
    stepsEn:['Blanch bones in boiling water 10 min. Drain and rinse thoroughly to remove impurities.','In a large pot, cover bones with cold water. Bring to a vigorous boil and keep at full boil for 3 hours — this emulsifies the collagen into a white, creamy broth. Top up water as needed.','Reduce to simmer for another 8–10 hours. Strain through a fine mesh.','Chashu: tie pork belly into a roll. Sear. Braise in soy sauce, mirin, sake, and sugar for 2 hours. Slice when cool.','Tare: reduce soy sauce and mirin to a thick concentrate.','Marinated eggs: soft boil 6.5 min, peel, marinate in tare + water overnight.','Assemble: tare in bowl, ladle hot broth, add noodles, chashu, egg, and toppings.'],
    stepsZh:['猪骨冷水下锅，大火焯10分钟，捞出冲洗干净，去除杂质。','大锅中猪骨加冷水，大火烧开并保持剧烈沸腾3小时——这能让胶原蛋白乳化成乳白浓汤，随时补充蒸发的水分。','转小火继续煮8-10小时，过滤备用。','叉烧：五花肉卷成卷，煎至上色，加酱油、味醂、清酒和糖红焖2小时，冷却后切片。','酱汁：酱油和味醂浓缩至稠汁。','腌蛋：煮6.5分钟，剥壳，泡在酱汁兑水的溶液中隔夜。','组装：碗底倒酱汁，舀入热汤，加面条、叉烧、腌蛋和配料。'],
    notesEn:"A 14-hour weekend project that will make you never want to order ramen at a restaurant again. The key to the milky-white broth is a vigorous boil, not a simmer.", notesZh:'一个14小时的周末项目，做完后你可能再也不想去餐厅点拉面了。乳白色汤底的关键是剧烈沸腾，而非小火慢炖。'
  },

  // COCKTAILS
  'cocktail-negroni':{
    emoji:'🍸', eyebrowEn:'Classic · Stirred · ABV ~24%', eyebrowZh:'经典 · 搅拌 · 酒精度约24%',
    titleEn:'Negroni', titleZh:'内格罗尼',
    metaEn:[['Method','Stirred'],['Glass','Rocks / Coupe'],['Ice','Large cube or sphere'],['Garnish','Orange twist']],
    metaZh:[['手法','搅拌'],['酒杯','平底岩石杯/碟形杯'],['冰块','大冰块/冰球'],['装饰','橙皮卷']],
    ingrEn:['<strong>1 oz (30ml)</strong> London Dry Gin','<strong>1 oz (30ml)</strong> Campari','<strong>1 oz (30ml)</strong> Sweet Vermouth (Carpano Antica recommended)'],
    ingrZh:['<strong>1 oz (30ml)</strong> 伦敦干金酒','<strong>1 oz (30ml)</strong> 金巴利','<strong>1 oz (30ml)</strong> 甜苦艾酒（推荐Carpano Antica）'],
    stepsEn:['Add all ingredients to a mixing glass filled with large ice.','Stir for 30 seconds until well-chilled and properly diluted.','Strain into a rocks glass over a single large ice cube.','Express an orange twist over the surface — hold the peel an inch above the glass and snap it.','Rub the peel around the rim and drop it in, or balance it on the rim.'],
    stepsZh:['将所有材料倒入装有大冰块的调酒杯。','搅拌30秒，使其充分冷却并适度稀释。','用隔冰匙滤入放有大冰块的岩石杯。','将橙皮扭转表达油脂——离杯面约3厘米处用力折压橙皮。','橙皮擦杯口后放入杯中，或搭在杯沿。'],
    notesEn:"The equal-parts ratio is sacrosanct. Don't shake — stirring gives the Negroni its silky, clarified texture. I prefer Carpano Antica for vermouth; it adds a vanilla richness.", notesZh:'三等份的比例是神圣的。不要摇——搅拌赋予内格罗尼丝滑清澈的质感。我偏好Carpano Antica苦艾酒，它带来香草般的丰润感。'
  },
  'cocktail-daiquiri':{
    emoji:'🥂', eyebrowEn:'Classic · Shaken · ABV ~20%', eyebrowZh:'经典 · 摇制 · 酒精度约20%',
    titleEn:'Daiquiri', titleZh:'得其利',
    metaEn:[['Method','Shaken'],['Glass','Chilled coupe'],['Ice','Shake with ice, serve up'],['Garnish','None, or lime wheel']],
    metaZh:[['手法','摇制'],['酒杯','冰镇碟形杯'],['冰块','加冰摇制，滤冰上桌'],['装饰','无，或青柠片']],
    ingrEn:['<strong>2 oz (60ml)</strong> White rum (Havana Club 3yr recommended)','<strong>¾ oz (22ml)</strong> Fresh lime juice','<strong>¾ oz (22ml)</strong> Simple syrup (1:1 sugar:water)'],
    ingrZh:['<strong>2 oz (60ml)</strong> 白朗姆酒（推荐哈瓦那俱乐部3年）','<strong>¾ oz (22ml)</strong> 新鲜青柠汁','<strong>¾ oz (22ml)</strong> 简单糖浆（糖:水=1:1）'],
    stepsEn:['Chill your coupe glass in the freezer, or with ice water.','Combine all ingredients in a cocktail shaker with plenty of ice.','Shake hard for 12–15 seconds — you want the shaker to be frost-covered.','Double-strain through a Hawthorne strainer and fine mesh into the chilled coupe.','No garnish needed. The drink speaks for itself.'],
    stepsZh:['将碟形杯放入冰箱预冷，或用冰水冰杯。','所有材料加入波士顿摇酒壶，放入大量冰块。','用力摇制12-15秒，至摇酒壶外壁结霜。','用霍桑隔冰器和细网过滤器双重过滤至冰镇的碟形杯中。','无需装饰，酒本身就是答案。'],
    notesEn:"A Daiquiri is a technical benchmark — if you can make a great Daiquiri, you understand balance. Fresh lime juice only; bottled juice is not acceptable.", notesZh:'得其利是调酒技术的标杆——会做好一杯得其利，就懂得了平衡。只用新鲜青柠汁，瓶装果汁不可接受。'
  },
  'cocktail-oldfashioned':{
    emoji:'🥃', eyebrowEn:'Classic · Stirred · ABV ~35%', eyebrowZh:'经典 · 搅拌 · 酒精度约35%',
    titleEn:'Old Fashioned', titleZh:'古典鸡尾酒',
    metaEn:[['Method','Build in glass'],['Glass','Heavy rocks glass'],['Ice','Large single cube'],['Garnish','Orange peel + cherry']],
    metaZh:[['手法','杯中直调'],['酒杯','厚底岩石杯'],['冰块','大单冰块'],['装饰','橙皮 + 樱桃']],
    ingrEn:['<strong>2 oz (60ml)</strong> Bourbon or Rye whiskey','<strong>1 tsp</strong> Demerara sugar syrup (or 1 sugar cube)','<strong>2 dashes</strong> Angostura bitters','<strong>1 dash</strong> Orange bitters'],
    ingrZh:['<strong>2 oz (60ml)</strong> 波本或黑麦威士忌','<strong>1茶匙</strong> 德梅拉拉糖浆（或1块方糖）','<strong>2滴</strong> 安格斯图拉苦精','<strong>1滴</strong> 橙皮苦精'],
    stepsEn:['In a rocks glass, add the sugar syrup and both bitters. Stir briefly.','Add a large ice cube.','Pour whiskey over the ice.','Stir gently 15–20 seconds to chill and dilute slightly.','Express an orange peel over the glass, rub around the rim, and drop in. Add a cherry if desired.'],
    stepsZh:['在岩石杯中加入糖浆和两种苦精，简单搅匀。','放入大冰块。','将威士忌倒在冰块上。','轻轻搅拌15-20秒，使其冷却并适度稀释。','在杯口上方扭转橙皮取油，擦杯口，放入杯中。喜欢的话可以加颗樱桃。'],
    notesEn:"The Old Fashioned is a spirit-forward drink. Don't muddle the orange and cherry — that's a common mistake. Let the spirit shine.", notesZh:'古典鸡尾酒是以酒为主角的饮品。不要研磨橙片和樱桃——那是常见错误。让威士忌本身发光。'
  },
  'cocktail-lychee':{
    emoji:'🍹', eyebrowEn:'Original · Shaken · ABV ~18%', eyebrowZh:'原创 · 摇制 · 酒精度约18%',
    titleEn:'Lychee & Sichuan Pepper Sour', titleZh:'荔枝花椒酸酒',
    metaEn:[['Method','Shaken (dry + wet shake)'],['Glass','Chilled coupe'],['Ice','Shake, serve up'],['Garnish','Dried Sichuan pepper on foam']],
    metaZh:[['手法','干摇+湿摇'],['酒杯','冰镇碟形杯'],['冰块','摇制，滤冰上桌'],['装饰','花椒粒撒在泡沫上']],
    ingrEn:['<strong>1.5 oz (45ml)</strong> London Dry Gin','<strong>0.5 oz (15ml)</strong> Lychee liqueur','<strong>0.75 oz (22ml)</strong> Yuzu juice (or lemon)','<strong>0.5 oz (15ml)</strong> Sichuan pepper honey syrup*','<strong>1</strong> egg white (or 0.5 oz aquafaba)','*Simmer honey + cracked Sichuan pepper, strain'],
    ingrZh:['<strong>1.5 oz (45ml)</strong> 伦敦干金酒','<strong>0.5 oz (15ml)</strong> 荔枝利口酒','<strong>0.75 oz (22ml)</strong> 柚子汁（或柠檬汁）','<strong>0.5 oz (15ml)</strong> 花椒蜂蜜糖浆*','<strong>1个</strong> 蛋白（或0.5oz鹰嘴豆水）','*蜂蜜加开裂花椒慢火熬煮，过滤'],
    stepsEn:['Combine all ingredients in a shaker WITHOUT ice. Dry shake vigorously 15 seconds to emulsify the egg white.','Add ice and shake hard another 15 seconds until frost-covered.','Double-strain into a chilled coupe.','The foam should be thick and pillowy. Gently place 2–3 Sichuan peppercorns on the foam.','Do not garnish with anything that would pierce the foam — it took work.'],
    stepsZh:['将所有材料放入摇酒壶，不加冰，用力干摇15秒使蛋白乳化。','加入冰块，继续用力摇15秒至结霜。','双重过滤至冰镇碟形杯中。','泡沫应厚实蓬松，轻轻放2-3粒花椒在泡沫上。','不要用任何刺穿泡沫的东西装饰——那层泡沫来之不易。'],
    notesEn:"This is my proudest original. The Sichuan pepper creates a tingling ma (麻) sensation that pairs beautifully with the floral lychee and tart yuzu.", notesZh:'这是我最得意的原创作品。花椒产生的麻感与荔枝的花香、柚子的酸爽完美融合。'
  },
  'cocktail-puerh':{
    emoji:'🫧', eyebrowEn:'Original · Built · ABV ~12%', eyebrowZh:'原创 · 直调 · 酒精度约12%',
    titleEn:'Pu-erh Highball', titleZh:'普洱威士忌高球',
    metaEn:[['Method','Built'],['Glass','Highball / Collins'],['Ice','Tall spear or cubes'],['Garnish','Lemon wheel + salted rim']],
    metaZh:[['手法','直调'],['酒杯','海波杯/柯林斯杯'],['冰块','长冰柱或冰块'],['装饰','柠檬片 + 盐边']],
    ingrEn:['<strong>1.5 oz (45ml)</strong> Pu-erh-infused Japanese whisky*','<strong>Top up</strong> Yuzu soda (Yuzuade recommended)','<strong>¼ tsp</strong> flaky sea salt for rim','*Steep 5g aged pu-erh in whisky 4 hours, strain'],
    ingrZh:['<strong>1.5 oz (45ml)</strong> 普洱浸泡日本威士忌*','<strong>满至</strong> 柚子苏打（推荐Yuzuade）','<strong>¼茶匙</strong> 薄片海盐（做盐边）','*5g陈年普洱浸泡威士忌4小时，过滤'],
    stepsEn:['Make the infusion: steep 5g aged pu-erh tea in 200ml Japanese whisky for 4 hours. Strain and store.','Salt the rim of a highball glass: wet the rim with lemon, dip in flaky sea salt.','Fill glass with ice.','Pour infused whisky over ice.','Top gently with cold yuzu soda. Do not stir — let the layers mix naturally.','Garnish with a lemon wheel.'],
    stepsZh:['制作浸泡酒：将5g陈年普洱放入200ml日本威士忌中浸泡4小时，过滤备用。','制作盐边：用柠檬角擦湿海波杯杯口，蘸上薄片海盐。','杯中加满冰块。','倒入普洱威士忌。','轻轻注入冷藏柚子苏打，不要搅拌，让层次自然融合。','用柠檬片装饰。'],
    notesEn:"The pu-erh gives the whisky an earthy, mushroom-like depth that is unlike anything else. The salted rim creates an almost savory contrast to the yuzu brightness.", notesZh:'普洱赋予威士忌一种大地气息和蘑菇般的深度，独一无二。盐边与柚子的明亮酸感形成近乎咸鲜的对比。'
  },
  'cocktail-osmanthus':{
    emoji:'🍵', eyebrowEn:'Original · Stirred · ABV ~22%', eyebrowZh:'原创 · 搅拌 · 酒精度约22%',
    titleEn:'Osmanthus Martini', titleZh:'桂花马提尼',
    metaEn:[['Method','Stirred (fat-washed base)'],['Glass','Chilled coupe'],['Prep Time','4h (fat-wash) + 5 min'],['Garnish','Osmanthus flowers']],
    metaZh:[['手法','搅拌（油脂洗涤基酒）'],['酒杯','冰镇碟形杯'],['准备时间','4小时（油洗）+ 5分钟'],['装饰','桂花']],
    ingrEn:['<strong>2 oz (60ml)</strong> Osmanthus oil-washed vodka*','<strong>1 oz (30ml)</strong> Dry vermouth','<strong>½ tsp</strong> Salted osmanthus honey','*Infuse 1 tsp osmanthus essential oil in vodka 4h, freeze, strain off solidified fat'],
    ingrZh:['<strong>2 oz (60ml)</strong> 桂花油洗伏特加*','<strong>1 oz (30ml)</strong> 干苦艾酒','<strong>½茶匙</strong> 咸桂花蜜','*将1茶匙桂花精油浸入伏特加4小时，冷冻后滤去凝固油脂'],
    stepsEn:['Fat-wash: mix 1 tsp osmanthus essential oil into 200ml vodka. Leave 4h at room temp, then freeze overnight. The oil solidifies — skim off and strain through coffee filter.','Add washed vodka, dry vermouth, and osmanthus honey to a mixing glass with large ice.','Stir 35 seconds — longer than usual, as fat-washed spirits need more dilution.','Strain into a chilled coupe.','Float 3–4 dried osmanthus flowers on the surface.'],
    stepsZh:['油洗：将1茶匙桂花精油混入200ml伏特加，室温放置4小时，然后冷冻过夜。油脂凝固后撇去，用咖啡滤纸过滤。','将洗好的伏特加、干苦艾酒和桂花蜜放入调酒杯加大冰块。','搅拌35秒——比平时更长，因为油洗烈酒需要更多稀释。','过滤入冰镇碟形杯。','在表面漂浮3-4朵干桂花装饰。'],
    notesEn:"Fat-washing transfers flavor compounds from an oil into a spirit, then you freeze it to remove the fat. The result is a vodka that carries the scent of autumn osmanthus without any oiliness.", notesZh:'油脂洗涤将油中的风味化合物转移到烈酒中，冷冻后去除油脂。结果是一款携带秋日桂花香气却无任何油腻感的伏特加。'
  },

  // BOOKS
  'book1':{
    emoji:'📖', eyebrowEn:'Fiction · Read 2024', eyebrowZh:'小说 · 2024年阅读',
    titleEn:'The Book Title — Author Name', titleZh:'《书名》— 作者',
    metaEn:[['Rating','★★★★★'],['Publisher','Publisher Name, Year'],['Pages','350']],
    metaZh:[['评分','★★★★★'],['出版','出版社，年份'],['页数','350']],
    ingrEn:[], ingrZh:[],
    stepsEn:[], stepsZh:[],
    notesEn:"Your detailed reading notes go here. What was the central thesis or narrative? What were the most memorable passages? How did this book change you?\n\nKey insight: Write the single most important thing you took away from this book.\n\nQuotations or paraphrases that resonated with you. How does this connect to your research or your life?", notesZh:'你的详细阅读笔记写在这里。中心论点或叙事是什么？哪些段落最令人难忘？这本书如何改变了你？\n\n关键洞见：写下你从这本书中得到的最重要的一件事。\n\n打动你的引文或意译。这与你的研究或生活有何联系？'
  },
  'book2':{emoji:'📗',eyebrowEn:'Non-Fiction · Read 2024',eyebrowZh:'非虚构 · 2024年阅读',titleEn:'Another Great Book — Author Name',titleZh:'《另一本好书》— 作者',metaEn:[['Rating','★★★★☆'],['Publisher','Publisher Name, Year'],['Pages','280']],metaZh:[['评分','★★★★☆'],['出版','出版社，年份'],['页数','280']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"Key arguments and themes. Did you agree? Where did the author's reasoning hold up, and where did it fall short?\n\nApplications to your own work: how might this change your approach to your research?\n\nRecommend to: people who are interested in [topic].",notesZh:'核心论点和主题。你是否认同？作者的推理哪里站得住脚，哪里有所不足？\n\n与自身研究的关联：这如何改变你的研究方式？\n\n推荐给：对[主题]感兴趣的人。'},
  'book3':{emoji:'📘',eyebrowEn:'Science · Read 2023',eyebrowZh:'科学 · 2023年阅读',titleEn:'Essential Science Reading — Author',titleZh:'《必读科学著作》— 作者',metaEn:[['Rating','★★★★★'],['Publisher','Publisher Name, Year'],['Pages','420']],metaZh:[['评分','★★★★★'],['出版','出版社，年份'],['页数','420']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"Dense and rewarding. Changed how I approach my own research. The central argument is that [thesis].\n\nChapter on X was particularly illuminating — I've returned to it multiple times and keep finding new things.\n\nMandatory reading for anyone working in this area.",notesZh:'厚重而值得。改变了我做研究的方式。核心论点是[论点]。\n\n关于X的章节尤为深刻——我已多次重读，每次都有新发现。\n\n从事这一领域的人必读。'},
  'book4':{emoji:'📕',eyebrowEn:'History · Read 2023',eyebrowZh:'历史 · 2023年阅读',titleEn:'A Sweeping History — Author',titleZh:'《一部宏大历史》— 作者',metaEn:[['Rating','★★★★☆'],['Publisher','Publisher Name, Year'],['Pages','560']],metaZh:[['评分','★★★★☆'],['出版','出版社，年份'],['页数','560']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"Meticulously researched and compellingly written. The main thesis challenges our assumptions about [historical period/topic].\n\nA reminder that the present is always stranger than we think, and that the past is never as settled as textbooks suggest.\n\nSome sections dragged, but the core argument is worth the effort.",notesZh:'严谨翔实，叙述引人入胜。主要论点挑战了我们对[历史时期/话题]的既有认知。\n\n提醒我们现在总比我们以为的更奇异，过去也从未像教科书那样已成定局。\n\n部分章节稍显拖沓，但核心论点值得付出时间。'},
  'book5':{emoji:'📙',eyebrowEn:'Philosophy · Read 2023',eyebrowZh:'哲学 · 2023年阅读',titleEn:'A Philosophy Classic — Author',titleZh:'《哲学经典》— 作者',metaEn:[['Rating','★★★★★'],['Publisher','Publisher Name, Year'],['Pages','240']],metaZh:[['评分','★★★★★'],['出版','出版社，年份'],['页数','240']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"Read slowly, on weekends, over three months. Some books aren't meant to be consumed — they're meant to be lived alongside.\n\nThe central question of the work is [question]. The author's answer is [answer], and I find myself returning to it constantly.\n\nThis book makes me feel less alone in my confusion about [topic].",notesZh:'利用三个月的周末慢慢读。有些书不是用来读完的，而是用来相伴的。\n\n这部作品的核心问题是[问题]，作者的回答是[回答]，我发现自己不断回到这个答案。\n\n这本书让我在关于[话题]的困惑中感到不那么孤独。'},
  'book6':{emoji:'📒',eyebrowEn:'Food Writing · Read 2022',eyebrowZh:'美食写作 · 2022年阅读',titleEn:'A Food Memoir — Author',titleZh:'《美食回忆录》— 作者',metaEn:[['Rating','★★★★★'],['Publisher','Publisher Name, Year'],['Pages','310']],metaZh:[['评分','★★★★★'],['出版','出版社，年份'],['页数','310']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"The best food writing is really writing about memory, identity, and love. This book made me call my mother immediately after finishing it.\n\nThe author's voice is so precise and honest that every sentence feels like it was written specifically for you.\n\nKey passage: [write your favorite passage or paraphrase here].",notesZh:'最好的美食写作，写的其实是记忆、身份与爱。读完后我立刻打电话给了妈妈。\n\n作者的文字如此精准诚实，每一句话都像是专门为你写的。\n\n关键段落：[在此写下你最喜欢的段落或意译]。'},

  // TAROT
  'tarot-fool':{emoji:'🤸',eyebrowEn:'Major Arcana · 0',eyebrowZh:'大阿卡纳 · 0',titleEn:'The Fool',titleZh:'愚者',metaEn:[['Element','Air'],['Planet','Uranus'],['Number','0 — infinite potential']],metaZh:[['元素','风'],['行星','天王星'],['数字','0 — 无限潜能']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"The Fool stands at the edge of a cliff, about to step off. He is not stupid — he is innocent. He hasn't yet learned to be afraid. This is the card of beginnings, of pure potential, of the courage to start without knowing what comes next.\n\nUpright: new beginnings, spontaneity, a leap of faith, unlimited potential.\nReversed: recklessness, naivety, poor judgment, risk-taking without preparation.",notesZh:'愚者站在悬崖边缘，即将踏步而出。他并非愚蠢——他是纯真的。他还没有学会恐惧。这是关于开始、纯粹潜能、以及在未知中勇敢出发的牌。\n\n正位：新开始、自发性、信念的飞跃、无限潜能。\n逆位：鲁莽、幼稚、判断失误、未经准备的冒险。'},
  'tarot-magician':{emoji:'🪄',eyebrowEn:'Major Arcana · I',eyebrowZh:'大阿卡纳 · I',titleEn:'The Magician',titleZh:'魔术师',metaEn:[['Element','Air / Mercury'],['Planet','Mercury'],['Number','1 — unity, will']],metaZh:[['元素','风/水星'],['行星','水星'],['数字','1 — 统一，意志']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"One hand points to the sky, one to the earth: 'As above, so below.' The Magician has all four suits of the tarot on his table — he has every tool he needs. The question is whether he will use them.\n\nUpright: willpower, skill, manifestation, resourcefulness. You have everything you need.\nReversed: manipulation, trickery, wasted talent, illusion.",notesZh:'一手指天，一手指地："如其在上，如其在下。"魔术师桌上摆着塔罗的四个花色——他拥有所需的一切工具。问题在于他是否会使用它们。\n\n正位：意志力、技能、显化、足智多谋。你拥有一切所需。\n逆位：操纵、欺骗、浪费才华、幻觉。'},
  'tarot-tower':{emoji:'⚡',eyebrowEn:'Major Arcana · XVI',eyebrowZh:'大阿卡纳 · XVI',titleEn:'The Tower',titleZh:'塔',metaEn:[['Element','Fire'],['Planet','Mars'],['Number','16 — sudden change']],metaZh:[['元素','火'],['行星','火星'],['数字','16 — 突变']],ingrEn:[],ingrZh:[],stepsEn:[],stepsZh:[],notesEn:"People fall from a tower struck by lightning. It is terrifying and necessary. The Tower represents the sudden destruction of something built on false foundations. It is uncomfortable, but it is honest.\n\nUpright: sudden change, upheaval, chaos, revelation, awakening.\nReversed: avoidance of catastrophe, delay, resisting necessary change.\n\nPersonal note: I find this card appears at moments of breakthrough in my research — when an experiment fails spectacularly, it often points toward the real answer.",notesZh:'人们从被闪电击中的塔上坠落。这令人恐惧，也是必要的。塔牌代表建立在虚假基础上的事物突然崩塌。它令人不适，但它是诚实的。\n\n正位：突如其来的变化、动荡、混乱、启示、觉醒。\n逆位：避免灾难、延迟、抵制必要的改变。\n\n个人笔记：我发现这张牌出现在研究突破的时刻——当实验壮观地失败时，它往往指向真正的答案。'},

  // PROJECTS (simplified)
  'proj1':{emoji:'🤖',eyebrowEn:'Web Application · 2024',eyebrowZh:'网页应用 · 2024',titleEn:'Project Name One',titleZh:'项目一',metaEn:[['Stack','React, Python, FastAPI'],['Status','Active'],['GitHub','github.com/you/proj1']],metaZh:[['技术栈','React, Python, FastAPI'],['状态','进行中'],['代码','github.com/you/proj1']],ingrEn:[],ingrZh:[],stepsEn:['Problem: Describe what problem this solves and why it matters.','Approach: Explain the technical approach and key design decisions.','Key features: List the main features and what makes this interesting.','Outcome: Who uses it, what impact has it had, what did you learn?'],stepsZh:['问题：描述这个项目解决什么问题以及为什么重要。','方法：解释技术路线和关键设计决策。','核心功能：列出主要功能及其亮点。','成果：谁在使用，有什么影响，你学到了什么？'],notesEn:'Future work: what would you do next if you had more time?',notesZh:'未来计划：如果有更多时间，你会做什么？'},
  'proj2':{emoji:'🛠',eyebrowEn:'CLI Tool · 2023',eyebrowZh:'命令行工具 · 2023',titleEn:'Project Name Two',titleZh:'项目二',metaEn:[['Stack','Python, Click'],['Downloads','10,000+'],['GitHub','github.com/you/proj2']],metaZh:[['技术栈','Python, Click'],['下载量','10,000+'],['代码','github.com/you/proj2']],ingrEn:[],ingrZh:[],stepsEn:['Problem: What tedious workflow does this automate?','Implementation: Key technical details worth sharing.','Reception: How did people discover it? What feedback did you get?','Lessons: What would you do differently now?'],stepsZh:['问题：这自动化了哪些繁琐的工作流？','实现：值得分享的关键技术细节。','反响：人们如何发现它？收到了什么反馈？','经验：现在你会有什么不同的做法？'],notesEn:'This project taught me more about software design than any textbook.',notesZh:'这个项目教给我的软件设计知识比任何教科书都多。'},
  'proj3':{emoji:'📊',eyebrowEn:'Dataset · 2023',eyebrowZh:'数据集 · 2023',titleEn:'Research Benchmark',titleZh:'研究基准',metaEn:[['Size','50,000 examples'],['Task','[ML Task]'],['License','CC BY 4.0']],metaZh:[['规模','50,000个样本'],['任务','[机器学习任务]'],['许可','CC BY 4.0']],ingrEn:[],ingrZh:[],stepsEn:['Motivation: Why did this benchmark not exist before? What gap does it fill?','Collection: How was the data collected and annotated?','Statistics: Key statistics about the dataset.','Baselines: What baseline models were evaluated?'],stepsZh:['动机：为什么这个基准之前不存在？它填补了什么空白？','收集：数据是如何收集和标注的？','统计：数据集的关键统计数据。','基线：评估了哪些基线模型？'],notesEn:'Released alongside our ICML paper. Download and evaluation scripts available on GitHub.',notesZh:'随我们的ICML论文发布。下载和评估脚本在GitHub上可获取。'},
};