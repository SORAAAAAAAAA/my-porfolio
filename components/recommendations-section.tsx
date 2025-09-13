import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecommendationsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">💬 Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-600 rounded-full mx-1"></div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">No recommendations yet</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
