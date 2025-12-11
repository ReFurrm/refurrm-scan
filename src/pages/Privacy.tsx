export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="font-['Poppins'] font-bold text-4xl text-[#1C2E25] mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="font-['Poppins'] font-semibold text-2xl text-[#315E47] mb-4">AI Unit and Item Scanner Policy</h2>
          
          <p className="font-['Open_Sans'] text-[#1C2E25] mb-4 leading-relaxed">
            The ReFURRM AI Scanner tools are designed to identify and estimate the resale value of visible, non-personal items from storage unit photos. These tools analyze publicly available or user-submitted images to assist in determining approximate resale potential for general goods such as furniture, appliances, and equipment.
          </p>

          <p className="font-['Open_Sans'] text-[#1C2E25] mb-4 leading-relaxed">
            ReFURRM's AI tools do not detect, process, or assign value to personal or sentimental property, including but not limited to photographs, documents, awards, toys, or identifiable personal belongings. Any such items are automatically filtered from analysis and excluded from valuation reports.
          </p>

          <p className="font-['Open_Sans'] text-[#1C2E25] mb-4 leading-relaxed">
            The information produced by the AI Scanner is for informational and resale guidance purposes only. ReFURRM makes no warranty regarding accuracy, market value, or profit outcomes. Users remain solely responsible for their purchase decisions and compliance with applicable storage-auction laws.
          </p>

          <p className="font-['Open_Sans'] text-[#1C2E25] mb-4 leading-relaxed">
            By using the AI Scanner, users acknowledge that the feature operates strictly within ReFURRM's ethical standards and agree not to upload or analyze images containing private, confidential, or personally identifiable material.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-['Poppins'] font-semibold text-2xl text-[#315E47] mb-4">Data Collection and Use</h2>
          <p className="font-['Open_Sans'] text-[#1C2E25] mb-4 leading-relaxed">
            ReFURRM collects only the data necessary to provide our services, including email addresses for donations and account management. We do not sell or share personal information with third parties except as required by law or to process payments through our secure payment partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-['Poppins'] font-semibold text-2xl text-[#315E47] mb-4">Disclaimer</h2>
          <p className="font-['Open_Sans'] text-sm text-[#C8BFAE] italic">
            "ReFURRM Scanner analyzes publicly available storage auction listings to assess resale potential. The tool does not access private data, interfere with sales, or identify individuals."
          </p>
        </section>

        <p className="font-['Open_Sans'] text-sm text-[#C8BFAE] mt-12">Last Updated: November 2025</p>
      </div>
    </div>
  );
}
