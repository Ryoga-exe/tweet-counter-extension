# tweet-counter-extension

This repository is related to the assignment given in the "[コンテンツ入門 (GA13501)](https://kdb.tsukuba.ac.jp/syllabi/2023/GA13501/jpn/)" course at the University of Tsukuba.

My approach to counting the number of tweets, including those with the hashtag ["`#コンテンツ入門2023`"](https://twitter.com/hashtag/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%85%A5%E9%96%802023) that one has posted.

## インストール方法

1. [こちらのページ](https://github.com/Ryoga-exe/tweet-counter-extension/releases)の Latest の付いたリリースから `tweet-counter-extension.zip` をダウンロードします
1. ダウンロードした zip ファイルを展開します
1. [chrome://extensions/](chrome://extensions/)を開き、右上の「デベロッパーモード」をオンにします
1. 「パッケージ化されていない拡張機能を読み込む」から展開したフォルダの中にある `chrome-mv3-prod` を読み込みます

## 使い方

1. Twitter の検索ページから検索をし、最新のツイートを表示します
1. 左上に表示される「ツイート数をカウント」を押します
1. ダイアログが表示されるので検索対象のユーザ名を入力します (広告等をカウントしないため必要です)
1. 待ちます

## Stack

- [Plasmo](https://www.plasmo.com/) - A browser extension development platform
