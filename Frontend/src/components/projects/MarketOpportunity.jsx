export default function MarketOpportunity() {
  return (
    <section className="py-20 bg-gray-50 text-center bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <h2 className="text-3xl font-heavitas text-machineBlue">Market Opportunity</h2>

      <div className="grid md:grid-cols-3 gap-10 mt-10 ">
        <div className="p-6 border rounded-2xl hover:shadow-2xl transition m9-card">₹45B+ Street Food Market</div>
        <div className="p-6 border rounded-2xl hover:shadow-2xl transition m9-card">High-Traffic Locations</div>
        <div className="p-6 border rounded-2xl hover:shadow-2xl transition m9-card">Multi-City Rollout 2027</div>
      </div>
    </section>
  );
}
