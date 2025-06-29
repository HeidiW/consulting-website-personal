import { Button } from "@/components/ui/button";
import { ChartLine } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="gradient-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-lg font-medium text-primary mb-4 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
              Hi, I'm Heidi Williams Foy
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Scale Your Business with{" "}
              <span className="text-primary">Expert Performance Ads</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed bg-white/40 backdrop-blur-sm p-6 rounded-2xl">
              I help businesses maximize their ROI through strategic advertising campaigns on Meta, TikTok, and Reddit. Get data-driven results that actually move the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("consult")}
                className="px-8 py-4 shadow-lg"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-neutral-900 rounded-2xl shadow-2xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="text-accent font-semibold">TikTok Pixel Base Code</div>
                <div className="text-neutral-400 text-xs">ttclid tracking</div>
              </div>
              <pre className="text-neutral-300 leading-relaxed overflow-x-auto">
{`<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
  ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
  var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
  var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  
  ttq.load('PIXEL_ID_HERE');
  ttq.page();
}(window, document, 'ttq');
</script>`}
              </pre>
            </div>
            <div className="absolute -bottom-6 -left-6 gradient-warm p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                  <ChartLine className="text-primary text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-white">250% ROI</div>
                  <div className="text-sm text-white/80">Average Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
