/**
 
Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, 
n is the number of customers to buy hotdogs, 
different numbers have different prices (refer to the following table),
return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+

TEST:
Test.assertSimilar(saleHotdogs(1),100);
    Test.assertSimilar(saleHotdogs(4),400);
    Test.assertSimilar(saleHotdogs(5),475);
    Test.assertSimilar(saleHotdogs(9),855);
    Test.assertSimilar(saleHotdogs(10),900);
    Test.assertSimilar(saleHotdogs(100),9000);

*/
function saleHotdogs(n) {
    return (n < 5) ? n * 100 : (n >= 5 && n < 10) ? n * 95 : (n >= 10) ? n * 90 : 0;
    //return n*(n<5?100:n<10?95:90);
}