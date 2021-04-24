export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2413',
  			'Image':'https://i.imgur.com/oh1cyW4.jpg',
  			'Name_tc':'暗真姬',
  			'Name_jp':'聖遺解放ノア',
  			'hp':'18039',
  			'Atk_before':'238x3(4)回',
  			'Atk_after':'299x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','輔助type'],
  			'Characteristic_Before':['貫通 Lv2','詛咒 Lv3'],
  			'Characteristic_After':['貫通 Lv2','詛咒 Lv3','技能盾 Lv1'],
  			'Tp_Transform':'20',
  			'Tp_Characteristic':'陷阱設置',
  			'Comment':"暗真姬"
  		}
  	)
}