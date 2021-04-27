export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2987',
  			'Image':'https://imgur.com/NJOFmRA.jpg',
  			'Name_tc':'暗裝姬',
  			'Name_jp':'聖遺解放フォンセ',
  			'hp':'15236',
  			'Atk_before':'298x3(4)回',
  			'Atk_after':'354x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['貫通 Lv2','對空攻擊 Lv1'],
  			'Characteristic_After':['貫通 Lv3','對空攻擊 Lv1','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"<p>三代暗限定，以特化普通攻擊及瞬間物理爆發輸出為主的棋寵。</p><p>覺醒前主動技能為消除特定範圍敵人的迴避效果及自身單回合偏高倍率的倍攻效果，前者在特定關卡有奇效，後者用作清理道中還算理想。覺醒後主動技能為單回合高倍攻效果及附帶連鎖追擊，自身有貫通Lv 3及對空攻擊等強化攻擊特性加持下，整套的輸出傷害還是有貼近一線等級的。</p><p>TP技能為特定對象的棋寵單回合高倍攻，但由於TP量需求過於驚人，所以基本上可以直接無視有這個技能存在。在現時版本中隊長技能發動的要求及倍率都有太多的上位取代品，加上沒有防禦層面的效果，非特殊情況都不會考慮她作為隊長的可能性。隊員方面則是剛好的一線及二線之間，因應關卡的要求她大概還是會有出場的機會吧。</p>"
  		}
  	)
}