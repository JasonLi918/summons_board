export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2985',
  			'Image':'聖遺解放シエル',
  			'Name_tc':'木裝姬',
  			'Name_jp':'聖遺解放シエル',
  			'hp':'20085',
  			'Atk_before':'220x3(4)回',
  			'Atk_after':'269x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','防禦type'],
  			'Characteristic_Before':['貫通 Lv2','防禦性能 Lv3'],
  			'Characteristic_After':['貫通 Lv3','防禦性能 Lv3','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"木裝姬"
  		}
  	)
}