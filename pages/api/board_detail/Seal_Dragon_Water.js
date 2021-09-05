export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3504',
  			'Image':'https://imgur.com/GMtJeN2.jpg',
  			'Name_tc':'水封龍',
  			'Name_jp':'絶凍竜神獣シュスト',
  			'hp':'18008',
  			'Atk_before':'364x3(4)回',
  			'Atk_after':'400x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','輔助type'],
  			'Characteristic_Before':['貫通 Lv2','詛咒 Lv2'],
  			'Characteristic_After':['貫通 Lv2','迴避性能 Lv3','詛咒 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"水封龍
			Ver 8.3.2
			
			覺醒前   LV.MAX CD 6
			[連鎖]
			向左側給予攻擊力X60倍防禦貫通且技能盾破壞的突擊傷害
			突擊後給予左右側方向橫三列的敵方水屬性攻擊力X30倍防禦貫通的傷害
			並設置可置於單位腳下、爆炸範圍十字列、攻擊力X30倍的傷害陷阱。
			
			
			覺醒後    LV.MAX CD 4
			[速攻]
			於十字列範圍設置可置於單位腳下的陷阱，
			爆炸範圍十字列，攻擊力X40倍、且連續 3 次防禦貫通傷害的陷阱。
			並可使平衡type且輔助type的己方 1 體，於盤面上任意移動。
			
			
			
			"
  		}
  	)
}