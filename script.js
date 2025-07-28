// ページが読み込まれたら実行する
document.addEventListener('DOMContentLoaded', function() {

    // --- モーダル（スポットライト表示）機能 ---
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalComment = document.getElementById('modal-comment');
    const closeButton = document.querySelector('.close-button');
    const gallery = document.querySelector('.gallery');

    // ギャラリー内の画像フレームがクリックされた時の処理
    gallery.addEventListener('click', function(e) {
        // クリックされたのが画像フレーム（またはその中のimg）かチェック
        const frame = e.target.closest('.artwork-frame');
        if (!frame) return;

        // 親のコンテナから作品情報を取得
        const container = frame.closest('.artwork-container');
        const title = container.dataset.title;
        const date = container.dataset.date;
        const comment = container.dataset.comment;
        const imgSrc = frame.querySelector('img').src;
        
        // モーダルに情報を設定
        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDate.textContent = date;
        modalComment.textContent = comment;

        // モーダルを表示（is-visibleクラスを追加）
        modal.classList.add('is-visible');
    });

    // モーダルを閉じる関数
    function closeModal() {
        modal.classList.remove('is-visible');
    }

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        // 背景の黒い部分がクリックされた時だけ閉じる
        if (e.target === modal) {
            closeModal();
        }
    });


    // --- 額縁変更機能 ---
    gallery.addEventListener('click', function(e) {
        // クリックされたのが額縁変更ボタンかチェック
        const frameBtn = e.target.closest('.frame-btn');
        if (!frameBtn) return;
        
        // どの額縁が選ばれたかを取得
        const selectedFrame = frameBtn.dataset.frame; // "wood", "gold", "pop"
        
        // 対象となる作品のフレーム要素を取得
        const container = frameBtn.closest('.artwork-container');
        const artworkFrame = container.querySelector('.artwork-frame');
        
        // すべての額縁クラスを一旦削除
        artworkFrame.classList.remove('wood-frame', 'gold-frame', 'pop-frame');
        
        // 選択された額縁クラスを追加
        artworkFrame.classList.add(selectedFrame + '-frame');
    });
});
