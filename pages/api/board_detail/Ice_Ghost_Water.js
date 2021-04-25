export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2485',
  			'Image':'https://imgur.com/PpmiwjK.jpg',
  			'Name_tc':'冰鬼',
  			'Name_jp':'氷骸鬼スカルキュレーター',
  			'hp':'17543',
  			'Atk_before':'254x3(4)回',
  			'Atk_after':'308x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','強襲type'],
  			'Characteristic_Before':['貫通 Lv2','詛咒 Lv2'],
  			'Characteristic_After':['貫通 Lv2','詛咒 Lv2','技能盾 Lv1'],
  			'Tp_Transform':'20',
  			'Tp_Characteristic':'技能加速',
  			'Comment':"冰鬼"
  		}
  	)
}