export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { drivers, variance, macro } = req.body;

  const prompt = `You are a senior FP&A analyst at a B2B software company. Given the following data, write 3 concise bullet points explaining the key revenue variance drivers and one forward-looking risk/opportunity. Be specific with numbers. No fluff.

Macro environment:
- US GDP Growth: ${macro.gdp}%
- Software PPI: ${macro.ppi}%
- Tech Employment: ${macro.tech}k

Business drivers (current vs. plan):
- Renewal Rate: ${drivers.renewalRate}% (plan: ${drivers.renewalRatePlan}%)
- New Logos: ${drivers.newLogos} (plan: ${drivers.newLogosPlan})
- Avg Contract Value: $${drivers.acv}k (plan: $${drivers.acvPlan}k)
- Seat Expansion Rate: ${drivers.expansionRate}% (plan: ${drivers.expansionRatePlan}%)

Revenue variance:
- Total variance vs plan: ${variance.total > 0 ? '+' : ''}$${variance.total.toFixed(1)}M (${variance.pct > 0 ? '+' : ''}${variance.pct.toFixed(1)}%)
- Volume effect: ${variance.volume > 0 ? '+' : ''}$${variance.volume.toFixed(1)}M
- Price effect: ${variance.price > 0 ? '+' : ''}$${variance.price.toFixed(1)}M
- Mix effect: ${variance.mix > 0 ? '+' : ''}$${variance.mix.toFixed(1)}M

Format: Return exactly 3 bullet points + 1 "Watch:" line. Each bullet max 25 words. No markdown headers.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        temperature: 0.3,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'Commentary unavailable.';
    res.status(200).json({ commentary: text });
  } catch (err) {
    res.status(500).json({ error: 'Groq API error', detail: err.message });
  }
}
