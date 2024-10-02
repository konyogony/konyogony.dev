import nProgress from 'nprogress';

nProgress.configure({
    showSpinner: false,
});

export const startLoading = () => {
    nProgress.start();
};

export const endLoading = () => {
    nProgress.done();
};

// Thanks https://github.com/HanMoeHtet/route-level-code-split
