pushd C:\_devl\workspace\git-wcms\shared
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\server\abc-common
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\shared\webapps-common\abc-cae-base
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\shared\webapps-common\linkschemes
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\shared\webapps-common\controllers
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\shared\webapps-common\abc-cae-base-webapp
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\sites\newsonline\abc-cae-news
mvn clean install -DskipTests=true -Pdev

cd C:\_devl\workspace\git-wcms\sites\newsonline\abc-cae-news-webapp
mvn clean install -DskipTests=true -Pdev

popd