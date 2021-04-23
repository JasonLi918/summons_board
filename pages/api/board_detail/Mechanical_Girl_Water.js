export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3462',
  			'Image':'https://i.imgur.com/uu5eAqC.jpg',
  			'Name_tc':'水機娘',
  			'Name_jp':'61式戦克乙:シャオシン',
  			'hp':'36245',
  			'Atk_before':'45x3(4)回',
  			'Atk_after':'45x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','輔助type'],
  			'Characteristic_Before':['詛咒 Lv3','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['貫通 Lv3','詛咒 Lv3','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"水機娘"
  		}
  	)
}