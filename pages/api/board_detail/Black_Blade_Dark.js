export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2613',
  			'Image':'https://imgur.com/FQidzdL.jpg',
  			'Name_tc':'黑刃',
  			'Name_jp':'幽冥獣・ヴァロン',
  			'hp':'10706',
  			'Atk_before':'401x3(4)回',
  			'Atk_after':'587x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','防禦type'],
  			'Characteristic_Before':['全體化','貫通 Lv2'],
  			'Characteristic_After':['全體化','貫通 Lv2','道具吸收 Lv1'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"黑刃"
  		}
  	)
}