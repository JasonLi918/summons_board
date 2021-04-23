export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2718',
  			'Image':'https://i.imgur.com/72MygNc.jpg',
  			'Name_tc':'火創神',
  			'Name_jp':'狂創神イヴェルガンド',
  			'hp':'12900',
  			'Atk_before':'377x3(4)回',
  			'Atk_after':'419x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','反擊type'],
  			'Characteristic_Before':['貫通 Lv2','迴避性能 Lv2'],
  			'Characteristic_After':['貫通 Lv2','迴避性能 Lv2','技能盾 Lv1'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"火創神"
  		}
  	)
}