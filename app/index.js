(function(_0x5dc76a,_0x33c018){const _0x4dadc6=_0x13ef,_0x10778b=_0x5dc76a();while(!![]){try{const _0x4932e4=-parseInt(_0x4dadc6(0x1b9))/0x1+parseInt(_0x4dadc6(0x1c4))/0x2*(-parseInt(_0x4dadc6(0x19d))/0x3)+-parseInt(_0x4dadc6(0x1b5))/0x4*(-parseInt(_0x4dadc6(0x1c5))/0x5)+parseInt(_0x4dadc6(0x1ad))/0x6+-parseInt(_0x4dadc6(0x1c3))/0x7*(parseInt(_0x4dadc6(0x1aa))/0x8)+-parseInt(_0x4dadc6(0x1bb))/0x9+parseInt(_0x4dadc6(0x1ab))/0xa*(parseInt(_0x4dadc6(0x1ba))/0xb);if(_0x4932e4===_0x33c018)break;else _0x10778b['push'](_0x10778b['shift']());}catch(_0x5f068e){_0x10778b['push'](_0x10778b['shift']());}}}(_0x585a,0x7f8e2));import{privateKey}from'./accounts/accounts.js';function _0x13ef(_0x444f30,_0x453907){const _0x585a2a=_0x585a();return _0x13ef=function(_0x13ef72,_0x13b813){_0x13ef72=_0x13ef72-0x19d;let _0x42cade=_0x585a2a[_0x13ef72];return _0x42cade;},_0x13ef(_0x444f30,_0x453907);}import{Config}from'./config/config.js';import _0x2a019e from'./src/core/core.js';import _0x9e5602 from'./src/core/db/sqlite.js';function _0x585a(){const _0x51ca02=['99nLtnXo','2509353aUnrKn','error','withdraw','TPOL','push','delay','claimDailySugar','Error\x20During\x20executing\x20bot','561449lWoUPZ','6GOMVDW','30kHquGs','\x20Processing\x20Done,\x20Delaying\x20for\x20','address','Please\x20input\x20your\x20account\x20first\x20on\x20accounts.js\x20file','ETH','729243AnxEhR','info','WRAPPING','Welcome\x20&\x20Enjoy\x20Sir!','length','WPOL','Error\x20:\x20','Account\x20','getSugar','getTodayTxLog','stringify','message','TXAMOUNT','48HUNGaF','1847940IpCcqg','connectWallet','992814UdCUSM','Author\x20:\x20Nofan\x20Rambe','balance','all','Error\x20:','getBalance',',\x20Retry\x20again\x20after\x2010\x20Second','BOT\x20STARTED','142964BhZXnM','log','WRAPPINGCOUNT','clear','31293KUrAaQ'];_0x585a=function(){return _0x51ca02;};return _0x585a();}import{Helper}from'./src/utils/helper.js';import _0x4850ac from'./src/utils/logger.js';import _0x28ff9b from'./src/utils/twist.js';async function operation(_0x3da775){const _0x409148=_0x13ef;await _0x9e5602['connectToDatabase'](),await _0x9e5602['createTable']();const _0x3d5fb4=new _0x2a019e(_0x3da775);try{await _0x3d5fb4[_0x409148(0x1ac)](),await _0x3d5fb4[_0x409148(0x1b2)](),await _0x3d5fb4['connectDapp'](),await _0x3d5fb4[_0x409148(0x1a5)](!![]),await _0x3d5fb4[_0x409148(0x1c1)]();while((await _0x9e5602[_0x409148(0x1a6)](_0x3d5fb4[_0x409148(0x1c7)],_0x409148(0x19f)))['length']<Config[_0x409148(0x1b7)]){_0x3d5fb4[_0x409148(0x1af)][_0x409148(0x1a2)]<Config[_0x409148(0x1a9)]&&await _0x3d5fb4['deposit']();if(_0x3d5fb4[_0x409148(0x1af)][_0x409148(0x1c9)]<=0.3){if(_0x3d5fb4['balance'][_0x409148(0x1a2)]>=0.3)await _0x3d5fb4[_0x409148(0x1bd)]();else throw Error('MINIMUM\x20BALANCE\x20IS\x200.3\x20POL');}await _0x3d5fb4['wrap'](),await _0x3d5fb4[_0x409148(0x1a5)]();}_0x3d5fb4[_0x409148(0x1af)][_0x409148(0x1be)]>Config[_0x409148(0x1a9)]&&await _0x3d5fb4['unwrap'](),await _0x3d5fb4['withdraw'](),await Helper['delay'](0x5265c00,_0x3da775,_0x409148(0x1a4)+_0x3d5fb4[_0x409148(0x1c7)]+_0x409148(0x1c6)+Helper['msToTime'](0x5265c00),_0x3d5fb4),await operation(_0x3da775);}catch(_0x39833c){_0x39833c['message']?await Helper[_0x409148(0x1c0)](0x2710,_0x3da775,_0x409148(0x1a3)+_0x39833c[_0x409148(0x1a8)]+_0x409148(0x1b3),_0x3d5fb4):await Helper[_0x409148(0x1c0)](0x2710,_0x3da775,_0x409148(0x1b1)+JSON['stringify'](_0x39833c)+',\x20Retry\x20again\x20after\x2010\x20Second',_0x3d5fb4),await operation(_0x3da775);}}async function startBot(){return new Promise(async(_0x57f133,_0x119a3a)=>{const _0x507e19=_0x13ef;try{_0x4850ac['info'](_0x507e19(0x1b4));if(privateKey[_0x507e19(0x1a1)]==0x0)throw Error(_0x507e19(0x1c8));const _0x47fa14=[];for(const _0x5b5746 of privateKey){_0x47fa14[_0x507e19(0x1bf)](operation(_0x5b5746));}await Promise[_0x507e19(0x1b0)](_0x47fa14),_0x57f133();}catch(_0x44ecb7){_0x4850ac[_0x507e19(0x19e)]('BOT\x20STOPPED'),_0x4850ac[_0x507e19(0x1bc)](JSON[_0x507e19(0x1a7)](_0x44ecb7)),_0x119a3a(_0x44ecb7);}});}((async()=>{const _0x2d6b55=_0x13ef;try{_0x4850ac[_0x2d6b55(0x1b8)](),_0x4850ac['info'](''),_0x4850ac['info']('Application\x20Started'),console[_0x2d6b55(0x1b6)](),console['log'](Helper['botName']),console['log'](_0x2d6b55(0x1ae)),console[_0x2d6b55(0x1b6)](_0x2d6b55(0x1a0)),await startBot();}catch(_0x104bbe){_0x28ff9b['clear'](),_0x28ff9b['clearInfo'](),console[_0x2d6b55(0x1b6)](_0x2d6b55(0x1c2),_0x104bbe),await startBot();}})());
