AFRAME.registerComponent("onClick", {
  schema: {
    isPlaying: { type: "boolean", default: false },
  },
  init: function () {
    this.videoEl = this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    if (!this.videoEl) return;
    var isPlaying = this.el.getAttribute("onClick").isPlaying;
    this.el.object3D.visible = true;
    if (!isPlaying) {
      this.el.setAttribute("onClick", {
        isPlaying: true,
      });
      this.videoEl.play();
    } else {
      this.el.setAttribute("onClick", {
        isPlaying: false,
      });
      this.videoEl.pause();
    }
  },
});
