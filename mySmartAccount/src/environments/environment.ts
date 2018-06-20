// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  defaultGasPrice: 5000000000,
  extensionBaseAbi: '[{"constant":true,"inputs":[{"name":"_smartAccount","type":"address"}],"name":"getIdentifiersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getActionParametersCountByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getViewDatasCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getDescription","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getSetupParametersByIndex","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_TRANSFER_ETHER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_smartAccount","type":"address"},{"name":"_index","type":"uint256"}],"name":"getIdentifierByIndex","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRoles","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getActionsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_smartAccount","type":"address"}],"name":"getIdentifiers","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_actionIndex","type":"uint256"},{"name":"_parameterIndex","type":"uint256"}],"name":"getActionParameterByIndexes","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getViewDataByIndex","outputs":[{"name":"","type":"bytes4"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_TRANSFER_TOKEN","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ROLE_TRANSFER_OWNERSHIP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSetupFunctions","outputs":[{"name":"","type":"bytes4"},{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getActionByIndex","outputs":[{"name":"","type":"bytes4"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uiExtensionVersion","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSetupParametersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"managerExtensionVersion","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"smartAccount","type":"address"},{"indexed":false,"name":"identifier","type":"bytes32"}],"name":"SetIdentifier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"smartAccount","type":"address"},{"indexed":false,"name":"identifier","type":"bytes32"}],"name":"RemoveIdentifier","type":"event"}]',
  smartAccountSCData: '0x60c0604052600560808190527f302e302e3100000000000000000000000000000000000000000000000000000060a09081526200004091600291906200022d565b503480156200004e57600080fd5b5060008054600160a060020a0319163390811790915562000078906401000000006200007e810204565b620002d2565b80600160a060020a03811615156200009557600080fd5b600054600160a060020a0316331480620000f25750604080517f626f756e6365720000000000000000000000000000000000000000000000000081529051908190036007019020620000f29033906401000000006200014a810204565b1515620000fe57600080fd5b604080517f626f756e63657200000000000000000000000000000000000000000000000000815290519081900360070190206200014690839064010000000062000179810204565b5050565b600081815260016020526040812062000172908464010000000062002396620001e982021704565b9392505050565b6000818152600160205260409020620001a19083640100000000620023b56200020882021704565b60408051600160a060020a03841681526020810183905281517faa695d83684b95e18fda4eda7e1794787e74fbc90097a9582f5c41989687883e929181900390910190a15050565b600160a060020a03166000908152602091909152604090205460ff1690565b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200027057805160ff1916838001178555620002a0565b82800160010185558215620002a0579182015b82811115620002a057825182559160200191906001019062000283565b50620002ae929150620002b2565b5090565b620002cf91905b80821115620002ae5760008155600101620002b9565b90565b61267980620002e26000396000f3006080604052600436106101665763ffffffff60e060020a600035041663055e328281146101755780630be69955146101a75780631479290e146102075780632ae8a7e3146102285780633547f04e1461024c57806335fb2125146102615780633cfd78f3146102825780634f6d3aed146102a357806354fd4d50146102cc578063556d7c4e146103565780635b7991cd1461037d5780635eb61aa91461039257806361775ee11461043c5780637ae77ecf1461045d57806382e6bbd21461047d578063888764c8146104ae5780638ba7e570146104cf5780638da5cb5b1461053b5780638ee341ed1461056c57806390042baf1461058157806398413ff1146105da5780639cbafc4b14610615578063a7c7a7e51461062a578063ac4ab3fb1461068a578063b1bbc6f5146106ae578063d466ab6b146106c8578063d97cf075146106dd578063db85d59c14610712578063e1aa70ec1461072a578063f2fde38b1461073f575b6000341161017357600080fd5b005b34801561018157600080fd5b5061018a610760565b60408051600160e060020a03199092168252519081900360200190f35b3480156101b357600080fd5b50604080516020600480358082013583810280860185019096528085526101739536959394602494938501929182918501908490808284375094975050509235600160a060020a0316935061079592505050565b34801561021357600080fd5b50610173600160a060020a0360043516610967565b34801561023457600080fd5b50610173600160a060020a03600435166024356109f4565b34801561025857600080fd5b5061018a610a12565b34801561026d57600080fd5b50610173600160a060020a0360043516610a6d565b34801561028e57600080fd5b50610173600160a060020a0360043516610af9565b3480156102af57600080fd5b506102b8610b45565b604080519115158252519081900360200190f35b3480156102d857600080fd5b506102e1610b4e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561031b578181015183820152602001610303565b50505050905090810190601f1680156103485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561036257600080fd5b5061036b610bd9565b60408051918252519081900360200190f35b34801561038957600080fd5b5061036b610bfc565b34801561039e57600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261017394600160a060020a03813516946024803595604435953695608494930191819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750610c039650505050505050565b34801561044857600080fd5b50610173600160a060020a0360043516610d5b565b34801561046957600080fd5b506101736004803560248101910135610da7565b34801561048957600080fd5b5061017360048035600160a060020a0316906024803591604435918201910135610e94565b3480156104ba57600080fd5b50610173600160a060020a0360043516610f9f565b3480156104db57600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261017394600160a060020a0381351694602480359560443595369560849493019181908401838280828437509497506110289650505050505050565b34801561054757600080fd5b5061055061105d565b60408051600160a060020a039092168252519081900360200190f35b34801561057857600080fd5b5061036b61106c565b34801561058d57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261017394369492936024939284019190819084018382808284375094975061108f9650505050505050565b3480156105e657600080fd5b506105f260043561110e565b60408051600160a060020a03909316835260208301919091528051918290030190f35b34801561062157600080fd5b5061036b611166565b34801561063657600080fd5b50604080516020600480358082013583810280860185019096528085526101739536959394602494938501929182918501908490808284375094975050509235600160a060020a0316935061118992505050565b34801561069657600080fd5b506102b8600160a060020a0360043516602435611352565b3480156106ba57600080fd5b506101736004351515611377565b3480156106d457600080fd5b5061036b6113f3565b3480156106e957600080fd5b5061017360048035600160a060020a031690602480359160443591606435908101910135611415565b34801561071e57600080fd5b506105f2600435611502565b34801561073657600080fd5b5061018a611538565b34801561074b57600080fd5b50610173600160a060020a036004351661156d565b604080517f7472616e7366657228616464726573732c75696e7432353629000000000000008152905190819003601901902081565b6040805160c960020a663137bab731b2b902815290519081900360070190206000906107c133826109f4565b82600160a060020a03811615156107d757600080fd5b8460005b81518160ff16101561091e576040805160008051602061260e8339815191528152905190819003600e0190208251839060ff841690811061081857fe5b60209081029091010151148061086657506040805160008051602061262e8339815191528152905190819003600e0190208251839060ff841690811061085a57fe5b60209081029091010151145b806108a95750604080516000805160206125ee833981519152815290519081900360120190208251839060ff841690811061089d57fe5b60209081029091010151145b151561091657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c6964206163636f756e7420726f6c65000000000000000000000000604482015290519081900360640190fd5b6001016107db565b600094505b86518560ff16101561095e5761095386888760ff1681518110151561094457fe5b9060200190602002015161165d565b600190940193610923565b50505050505050565b80600160a060020a038116151561097d57600080fd5b600054600160a060020a03163314806109bb57506040805160c960020a663137bab731b2b902815290519081900360070190206109bb903390611352565b15156109c657600080fd5b6040805160c960020a663137bab731b2b902815290519081900360070190206109f09083906116c3565b5050565b60008181526001602052604090206109f0908363ffffffff61172916565b604080517f7472616e7366657228616464726573732c75696e743235362c62797465732c7381527f7472696e672900000000000000000000000000000000000000000000000000006020820152905190819003602601902081565b6040805160c960020a663137bab731b2b90281529051908190036007019020600090610a9933826109f4565b60045460ff1615610aeb575a9150610ab08361156d565b336108fc610abd8461173e565b6040518115909202916000818181858888f19350505050158015610ae5573d6000803e3d6000fd5b50610af4565b610af48361156d565b505050565b6040805160c960020a663137bab731b2b90281529051908190036007019020600090610b2533826109f4565b60045460ff1615610b3c575a9150610ab083611750565b610af483611750565b60045460ff1681565b6002805460408051602060018416156101000260001901909316849004601f81018490048402820184019092528181529291830182828015610bd15780601f10610ba657610100808354040283529160200191610bd1565b820191906000526020600020905b815481529060010190602001808311610bb457829003601f168201915b505050505081565b6040805160008051602061260e8339815191528152905190819003600e01902081565b6003545b90565b610c0c85611a14565b1515610c1757600080fd5b610d3d308686856040516020018085600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140184600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140183815260200182805190602001908083835b60208310610ca45780518252601f199092019160209182019101610c85565b6001836020036101000a0380198251168184511680821785525050505050509050019450505050506040516020818303038152906040526040518082805190602001908083835b60208310610d0a5780518252601f199092019160209182019101610ceb565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902082611a3d565b1515610d4857600080fd5b610d5485858585611a8f565b5050505050565b6040805160c960020a663137bab731b2b90281529051908190036007019020600090610d8733826109f4565b60045460ff1615610d9e575a9150610ab083611c89565b610af483611c89565b6040805160c960020a663137bab731b2b90281529051908190036007019020600090610dd333826109f4565b60045460ff1615610e55575a9150610e1a84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375061108f945050505050565b336108fc610e278461173e565b6040518115909202916000818181858888f19350505050158015610e4f573d6000803e3d6000fd5b50610e8e565b610e8e84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375061108f945050505050565b50505050565b6040805160c960020a663137bab731b2b90281529051908190036007019020600090610ec033826109f4565b610ec986611a14565b1515610ed457600080fd5b60045460ff1615610f5c575a6105dc019150610f21868686868080601f01602080910402602001604051908101604052809392919081815260200183838082843750611f31945050505050565b336108fc610f2e8461173e565b6040518115909202916000818181858888f19350505050158015610f56573d6000803e3d6000fd5b50610f97565b610f97868686868080601f01602080910402602001604051908101604052809392919081815260200183838082843750611f31945050505050565b505050505050565b80600160a060020a0381161515610fb557600080fd5b600054600160a060020a0316331480610ff357506040805160c960020a663137bab731b2b90281529051908190036007019020610ff3903390611352565b1515610ffe57600080fd5b6040805160c960020a663137bab731b2b902815290519081900360070190206109f090839061165d565b61103184611a14565b151561103c57600080fd5b611046838261211b565b151561105157600080fd5b610e8e84848484611a8f565b600054600160a060020a031681565b6040805160008051602061262e8339815191528152905190819003600e01902081565b600061109c60008361211b565b15156110a757600080fd5b8151602083016000f09050600160a060020a03811615156110c757600080fd5b60408051338152600160a060020a038316602082015281517fea7ee36f14afc8a9bfbe485a8f3fe296c8575fe0c8a10d13062ee1f905a9b681929181900390910190a15050565b60008060038381548110151561112057fe5b600091825260209091206002909102015460038054600160a060020a03909216918590811061114b57fe5b90600052602060002090600202016001015491509150915091565b604080516000805160206125ee8339815191528152905190819003601201902081565b6040805160c960020a663137bab731b2b902815290519081900360070190206000906111b533826109f4565b82600160a060020a03811615156111cb57600080fd5b8460005b81518160ff161015611312576040805160008051602061260e8339815191528152905190819003600e0190208251839060ff841690811061120c57fe5b60209081029091010151148061125a57506040805160008051602061262e8339815191528152905190819003600e0190208251839060ff841690811061124e57fe5b60209081029091010151145b8061129d5750604080516000805160206125ee833981519152815290519081900360120190208251839060ff841690811061129157fe5b60209081029091010151145b151561130a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c6964206163636f756e7420726f6c65000000000000000000000000604482015290519081900360640190fd5b6001016111cf565b600094505b86518560ff16101561095e5761134786888760ff1681518110151561133857fe5b906020019060200201516116c3565b600190940193611317565b6000818152600160205260408120611370908463ffffffff61239616565b9392505050565b6040805160c960020a663137bab731b2b902815290519081900360070190206113a033826109f4565b6004805460ff191683151517908190556040805133815260ff9092161515602083015280517f62decc41e6dc4b13a3b193ef35091fcafe30ed459a0c61d6fdff13a3624057999281900390910190a15050565b6040805160c960020a663137bab731b2b9028152905190819003600701902081565b6040805160c960020a663137bab731b2b9028152905190819003600701902060009061144133826109f4565b60045460ff16156114c6575a915061148b87878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843750611028945050505050565b336108fc6114988461173e565b6040518115909202916000818181858888f193505050501580156114c0573d6000803e3d6000fd5b5061095e565b61095e87878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843750611028945050505050565b600380548290811061151057fe5b600091825260209091206002909102018054600190910154600160a060020a03909116915082565b604080517f7472616e7366657228616464726573732c75696e743235362c627974657329008152905190819003601f01902081565b80600160a060020a038116151561158357600080fd5b6040805160c960020a663137bab731b2b902815290519081900360070190206115ad903390611352565b806115de5750604080516000805160206125ee833981519152815290519081900360120190206115de903390611352565b15156115e957600080fd5b60008054600160a060020a0380851673ffffffffffffffffffffffffffffffffffffffff199092168217928390556040805133815293909116602084015282810191909152517f6954f1cdad46901994f29d9b1f78744c873c527bad04d294b4954cc8caf367da9181900360600190a15050565b600081815260016020526040902061167b908363ffffffff6123b516565b60408051600160a060020a03841681526020810183905281517faa695d83684b95e18fda4eda7e1794787e74fbc90097a9582f5c41989687883e929181900390910190a15050565b60008181526001602052604090206116e1908363ffffffff6123da16565b60408051600160a060020a03841681526020810183905281517f47808f9766351846ab3f47ddfd0cfc00fd1a4831674f2c872826932b0184d0be929181900390910190a15050565b6117338282612396565b15156109f057600080fd5b60003a5a8303615aa001029050919050565b600060605b60035482101561180a5782600160a060020a031660038381548110151561177857fe5b6000918252602090912060029091020154600160a060020a031614156117ff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f457874656e73696f6e20616c7265616479206164646564000000000000000000604482015290519081900360640190fd5b816001019150611755565b82600160a060020a031663710613986040518163ffffffff1660e060020a028152600401600060405180830381600087803b15801561184857600080fd5b505af115801561185c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561188557600080fd5b81019080805164010000000081111561189d57600080fd5b820160208101848111156118b057600080fd5b81518560208202830111640100000000821117156118cd57600080fd5b505092919050505090506118e18184610795565b604080518082018252600160a060020a0385811680835242602080850191825260038054600181018255600091825295517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6002909702968701805473ffffffffffffffffffffffffffffffffffffffff1916919096161790945590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9094019390935583513380825281850192909252606094810185815286519582019590955285517f9631f938a4d4638908b4b6df5121ae63f73a34d03b13c4c5810fe69cfc3f1aee95929489948894926080850192868101929102908190849084905b838110156119fa5781810151838201526020016119e2565b5050505090500194505050505060405180910390a1505050565b6000600160a060020a0382163014801590611a375750600160a060020a03821615155b92915050565b600080611a5983611a4d866123fc565b9063ffffffff6124a616565b9050611a8781604051808060c960020a663137bab731b2b90281525060070190506040518091039020611352565b949350505050565b6000821115611b235783600160a060020a03168383908360405180828051906020019080838360005b83811015611ad0578181015183820152602001611ab8565b50505050905090810190601f168015611afd5780820380516001836020036101000a031916815260200191505b50915050600060405180830381858888f193505050501515611b1e57600080fd5b611ba6565b83600160a060020a0316838260405180828051906020019080838360005b83811015611b59578181015183820152602001611b41565b50505050905090810190601f168015611b865780820380516001836020036101000a031916815260200191505b5091505060006040518083038185875af1925050501515611ba657600080fd5b7fbdffa03cadd792e735c209eefe1c70fca6d1845236b12d50018eca4e0590c5f633858585856040518086600160a060020a0316600160a060020a0316815260200185600160a060020a0316600160a060020a0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611c45578181015183820152602001611c2d565b50505050905090810190601f168015611c725780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b611c91612576565b611c99612576565b60038054600091906000198101908110611caf57fe5b6000918252602091829020604080518082019091526002909202018054600160a060020a039081168084526001909201549383019390935290945090851614611dfc575060005b600354811015611de15783600160a060020a0316600382815481101515611d1957fe5b6000918252602090912060029091020154600160a060020a03161415611dd9576003805482908110611d4757fe5b6000918252602091829020604080518082019091526002909202018054600160a060020a03168252600101549181019190915260038054919350849183908110611d8d57fe5b6000918252602091829020835160029290920201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091178155910151600190910155611de1565b600101611cf6565b8151600160a060020a03161515611df757600080fd5b611e00565b8291505b6003805490611e1390600019830161258d565b50611ee884600160a060020a031663710613986040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015611e5557600080fd5b505af1158015611e69573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015611e9257600080fd5b810190808051640100000000811115611eaa57600080fd5b82016020810184811115611ebd57600080fd5b8151856020820283011164010000000082111715611eda57600080fd5b505092919050505085611189565b60408051338152600160a060020a038616602082015281517f9eccb7b03c11c853fa2cc8ec156b6fd91171a972d7f07361449484aecf3f9ced929181900390910190a150505050565b6000821115611fc15782600160a060020a0316828260405180828051906020019080838360005b83811015611f70578181015183820152602001611f58565b50505050905090810190601f168015611f9d5780820380516001836020036101000a031916815260200191505b509150506000604051808303818686f4925050501515611fbc57600080fd5b612041565b82600160a060020a03168160405180828051906020019080838360005b83811015611ff6578181015183820152602001611fde565b50505050905090810190601f1680156120235780820380516001836020036101000a031916815260200191505b50915050600060405180830381855af4915050151561204157600080fd5b7fa1969559821647eef12c2f8623af622eed01d20ad3e90281eff6cffa511096d9338484846040518085600160a060020a0316600160a060020a0316815260200184600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120d95781810151838201526020016120c1565b50505050905090810190601f1680156121065780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050565b6000612125612576565b60008061215433604051808060c960020a663137bab731b2b90281525060070190506040518091039020611352565b15612162576001935061238d565b600091505b6003548210156121f557600380543391908490811061218257fe5b6000918252602090912060029091020154600160a060020a031614156121ea5760038054839081106121b057fe5b6000918252602091829020604080518082019091526002909202018054600160a060020a03168252600101549181019190915292506121f5565b816001019150612167565b8251600160a060020a0316151561220f576000935061238d565b600086111561224a576040805160008051602061260e8339815191528152905190819003600e019020612243903390611352565b935061238d565b8451151561225b576000935061238d565b506020840151604080517f7472616e7366657228616464726573732c75696e74323536290000000000000081529051908190036019019020600160e060020a0319808316911614806122ea5750604080517f7472616e7366657228616464726573732c75696e743235362c627974657329008152905190819003601f019020600160e060020a03198281169116145b806123585750604080517f7472616e7366657228616464726573732c75696e743235362c62797465732c7381527f7472696e6729000000000000000000000000000000000000000000000000000060208201529051908190036026019020600160e060020a03198281169116145b15612388576040805160008051602061262e8339815191528152905190819003600e019020612243903390611352565b600193505b50505092915050565b600160a060020a03166000908152602091909152604090205460ff1690565b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b600160a060020a0316600090815260209190915260409020805460ff19169055565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c80830185905283518084039091018152605c909201928390528151600093918291908401908083835b602083106124745780518252601f199092019160209182019101612455565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912095945050505050565b600080600080845160411415156124c0576000935061238d565b50505060208201516040830151606084015160001a601b60ff821610156124e557601b015b8060ff16601b141580156124fd57508060ff16601c14155b1561250b576000935061238d565b60408051600080825260208083018085528a905260ff8516838501526060830187905260808301869052925160019360a0808501949193601f19840193928390039091019190865af1158015612565573d6000803e3d6000fd5b50505060206040510351935061238d565b604080518082019091526000808252602082015290565b815481835581811115610af457600083815260209020610af491610c009160029182028101918502015b808211156125e957805473ffffffffffffffffffffffffffffffffffffffff19168155600060018201556002016125b7565b509056007472616e736665725f6f776e65727368697000000000000000000000000000007472616e736665725f65746865720000000000000000000000000000000000007472616e736665725f746f6b656e000000000000000000000000000000000000a165627a7a72305820717a9f56756829905c7c1832df7b8a086a68704ab6d521a3476308637400792e0029'
};
