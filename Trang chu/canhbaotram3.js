




AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://dynamodb.ap-northeast-1.amazonaws.com",
    accessKeyId: "AKIAXKZISWAEZWPSCIVL",
    secretAccessKey: "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",
});

var params_chart1 = {
    TableName: "Tram1",
    KeyConditionExpression: "device_id = :a",
    ExpressionAttributeValues: {
        ":a": 3,
    },
};

var docClient = new AWS.DynamoDB.DocumentClient();
docClient.query(params_chart1, function (err, data) {
    if (err) {
        alert("Error !!!");
    } else {
        for (let i = 1; i < data.Items.length; i++) {
            const nhietdo_data_sau3 = JSON.parse(data.Items[i].device_data.Temperature3);
            const nhietdo_data_truoc3 = JSON.parse(data.Items[i - 1].device_data.Temperature3);
            const c = nhietdo_data_sau3 - nhietdo_data_truoc3;
            // console.log(a);
            // const b=1;
            if (c >=5){
                document.getElementById("isActive3").style.display="block";
            }
            else{ document.getElementById("isActive3").style.display="none";}
        }
}});

function close_warning3(){
    document.getElementById("isActive3").style.display = "none";
}
